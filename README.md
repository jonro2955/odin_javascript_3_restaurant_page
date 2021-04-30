# odin_javascript_3_restaurant_page

Preview: https://jonro2955.github.io/odin_javascript_3_restaurant_page/

The 3rd project in TOP's Full Stack JavaScript Curriculum focuses on ES6 modular programming using Webpack (separating the JS source files into multiple modular files then compiling/bundling them into a single production file).

All content on this website is dynamically rendered using JavaScript and Webpack. A single div placed inside the HTML body is used as an entry point to insert all JavaScript-generated content. The source scripts are organized into multiple JS file modules and then bundled into a single output file called main.js using Webpack. Webpack compiles the source files into a single production script rather than having to load each source file into HTML using script tags for security and performance. The main source file, index.js, imports functions from the other JS file modules, with each module handling the contents of a specific part of the webpage. For instance, the header.js module exports the function that loads the navigation header, the about.js module loads the about page, and so on. The click listeners and content insertion/deletion logic is contained within the index.js file. 

Gitignore: The gitIgnore file simply tells git not to track the large folder named: node_modules. This is because the node_modules packages are only needed during the development process to build the main.js file.

Github Pages: Since the webpack process places the index.html inside a separate "dist" folder but GH pages is looking for an index.html in the root directory of the project, the following terminal script was required to set the "dist" folder as root:
  $ git subtree push --prefix dist origin gh-pages
