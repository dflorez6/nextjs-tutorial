# NEXT.JS TUTORIAL FROM OFFICIAL DOCUMENTATION

https://nextjs.org/learn

<!--
    To preview .md files on VSCode:
    1. Install Markdown Preview Enhanced
    2. cmd + shift + v -> To launch
 -->

- This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Assets, Metadata, and CSS

https://nextjs.org/learn/basics/create-nextjs-app/setup

- To use SASS, from the terminal run:

        >> npm install -D sass

## Installing gray-matter (used to parse .md files)

- First, install gray-matter which lets us parse the metadata in each markdown file.

        >> npm install gray-matter

## Render Markdown

https://nextjs.org/learn-pages-router/basics/dynamic-routes/render-markdown

- To render markdown content, we’ll use the remark library. First, let’s install it:

        >> npm install remark remark-html

## Fetch External API or Query Database

- Fetch External API or Query Database
  https://nextjs.org/learn-pages-router/basics/data-fetching/getstaticprops-details

- Like getStaticProps(), getStaticPaths() can fetch data from any data source. In our example, getAllPostIds
  (which is used by getStaticPaths) may fetch from an external API endpoint:
  https://nextjs.org/learn-pages-router/basics/dynamic-routes/dynamic-routes-details

## Fetching Data at Request Time

- Fetch External API or Query Database
  https://nextjs.org/learn-pages-router/basics/data-fetching/request-time

## Formatting Dates

https://nextjs.org/learn-pages-router/basics/dynamic-routes/polishing-post-page

- To use SASS, from the terminal run:

        >> npm install date-fns

- You can view the different format() string options on the date-fns website
  https://date-fns.org/v2.16.1/docs/format

## API Routes

https://nextjs.org/docs/pages/building-your-application/routing/api-routes

- Creating API Routes
  https://nextjs.org/learn-pages-router/basics/api-routes/creating-api-routes
