import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "posts");

export function getSortedPosts() {
  const postFiles = fs.readdirSync(postsDir);
  const allPosts = postFiles.map((postFile) => {
    let fileContent = fs.readFileSync(path.join(postsDir, postFile));
    let matterResult = matter(fileContent);
    let id = postFile.replace(".md", "");
    return {
      id,
      ...matterResult.data,
    };
  });

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
