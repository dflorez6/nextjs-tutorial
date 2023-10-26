import fs from "fs"; // is a Node.js module that lets you read files from the file system.
import path from "path"; // is a Node.js module that lets you manipulate file paths.
import matter from "gray-matter"; // is a library that lets you parse the metadata in each markdown file.
import { remark } from "remark"; // is a library that lets you render markdown file content
import html from "remark-html"; // used in combination with remark to render markdown file content

// Used to read from files in root/posts -> .md (markdown files) as part of fetching data from somewhere
const postsDirectory = path.join(process.cwd(), "posts");

// Function that fetches POSTS data from .md files and returns them sorted
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function that returns an array of IDs that will be used to build dynamic routes such as /posts/<id>
/* 
  * Important: The returned list is not just an array of strings — it must be an array of objects 
    that look like the comment above.
  * Each object must have the params key and contain an object with the id key (because we’re using [id] 
    in the file name). Otherwise, getStaticPaths will fail.
*/
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Function that fetches Post data from .md files and returns the Post data based on ID
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
