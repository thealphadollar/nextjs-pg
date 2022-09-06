import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "posts");

export async function getSortedPosts(onlyId = false) {
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map((postFile) => {
    let fileContent = fs.readFileSync(path.join(postsDir, postFile));
    let matterResult = matter(fileContent);
    let id = postFile.replace(".md", "");
    if (onlyId) {
      return id;
    }
    return {
      id,
      ...matterResult.data,
    };
  });

  if (onlyId) {
    return allPosts.map((post) => {
      return {
        params: {
          id: post,
        },
      };
    });
  }

  return allPosts.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export async function getPostById(id) {
  let pathMD = path.join(postsDir, `${id}.md`);
  let fileContent = fs.readFileSync(pathMD);
  let matterContent = matter(fileContent);

  let markdownToHTML = await remark().use(html).process(matterContent.content);
  let htmlString = markdownToHTML.toString();

  return {
    id,
    ...matterContent.data,
    htmlString,
  };
}
