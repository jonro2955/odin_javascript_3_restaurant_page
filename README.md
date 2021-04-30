# odin_javascript_3_restaurant_page

# Preview:
https://jonro2955.github.io/odin_javascript_3_restaurant_page/


All content on this website is dynamically rendered using JavaScript. A single div has been placed inside the HTML to be used as an entry point to insert all JavaScript-generated content. The source scripts are organized into modules and bundled into an output file using Webpack. Webpack compiles the source files into a single production script called main.js rather than having to load each source file into the HTML page inside script tags. The main source file, index.js, imports functions from the other JS script modules, with each module containing functions that handles the loading of specific parts of the webpage. For instance, the header.js module exports functions that loads the navigation header, the about.js module does the same for the about page, and so on. The click listeners and content insertion/deletion logic is contained in the index.js file. 

The gitIgnore file simply tells git not to track the large folder named: node_modules. This is because the node packages are only needed during the development process to build the main.js file.

Since GH pages is looking for an index.html in the root directory of your project, but the webpack process places the index.html inside a separate "dist" folder, in order to create a GH Pages site for this project, the following terminal script was required to set the "dist" folder as gh-pages root:
  $ git subtree push --prefix dist origin gh-pages
