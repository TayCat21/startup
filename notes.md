# My Class Notes
*I get to use these notes on the midterm*

[Link to README](README.md)

[Link to class Github page](https://learn.cs260.click/page/schedule/VenturaF2024_md)

### git commands
*You can find the VS Terminal under the View Tab at the Top*
- commit *(git commit -m "commit note")* Confirms changes to code on a given end
    - In VS make sure to stage change before commiting
- push *(git push)* pushes your commitment in VS up to Github
- pull *(git pull)* pulls what is in Github down into VS
- fetch *(git fetch)* gets current changes in Github without changing local VS
- status *(git status)* looks between the two to see if we missed a commit

### uploading to web
- type *[git clone (url of the project in github)]* into gitbash
- once run *cd* into it
- command *ll* lets you see the files in it
- type *code .* and it will open up the code to Visual Studios
- once your ready to upload it to the web, *cd* into the project and type this command *(./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup)*
    - *make sure you do the correct files to reach the key (ie ../keys/yourpemkey)*
    - *replace 'startup' with whatever subdomain you want*

### Midterm Notes
- @import url('https://fonts.googleapis.com/css?family=Quicksand'); --> to load CSS fonts from Google
- <div> is stands for a division element
- /i means to ignore case sensitivity
- JavaScript object uses :
such as:
const myObject = {
  property1: "value1",
  property2: 2,
  property3: function() {
    console.log("Hello from method!");
  }
}
- DOM textContent sets the child text for an element
- a is for hyperlink link is for linking CSS and others
    - wrap img with a to make image a hyperlink
- CSS: Class (.) ID (#)
- valid JSON: {"x":3}
- JSON is purely a string with a specified data format — it contains only properties, no methods. JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
- comsole commade for a script executable (chmod +x deploy.sh)
- flex forms child elements into a row or a column
- use !DOCTYPE html to start html file
- JavaScript switch statements
switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  default:
    // code to execute if no case matches
}
- add new properties to javascript objects using either
    - dot notation: myObject.newProperty
    - bracket notation: myObject[newProperty]
- A web certificate is necessary to use HTTPS
- a DNS A record can point to an IP address or another A record
- Port 443 is reserved for the HTTPS protocol, port 80 is for HTTP, and port 22 is for SSH (Secure Shell) protocol
- console commands: 
    - chmod: Changes the read, write, and execute permissions for a file or directory on a Unix-like operating system. 
    - pwd: Prints the current working directory path, starting from the root (/). 
    - cd: Changes the current working directory. 
    - ls: Lists the contents of the current directory. 
    - mkdir: Creates directories. 
    - mv: Moves or renames files. 
    - cp: Copies files and directories. 
    - rm: Deletes files or directories. 
    - touch: Creates blank files or modifies an existing file's timestamp. 
    - ln: Creates symbolic links (shortcuts) to other files. 
    - clear: Clears the terminal display. 
    - cat: Displays file contents on the terminal. 
    - echo: Prints any text that follows the command. 
    - less: Displays paged outputs in the terminal. 
    - sudo: Sets the program call to run with the rights of another user
    - vim: accomplishes file manipulation by using modes
    - wget: download files
    - ps: (which stands as abbreviation for “Process Status”) for viewing information related with the processes on a system
    - nano: opens a basic text editor to create or edit files
    - man: displays the manual page for a given command, providing detailed information about its usage
    - ssh: establishes a secure connection to a remote server, allowing you to execute commands on that machine remotely.
    - rsh: Executes a command on a remote machine without logging into it
    - oc rsh: Opens a remote shell session to a container using secure shell (SSH) technology.

    ### Finals notes: 
    - Default Ports
      - HTTP: 80
      - HTTPS: 443
      - SSH: 22
    - HTTP status code ranges
      - 500: server error
      - 400: client error
      - 300: caching error
      - 200: success

    - The Content-Type header is crucial for specifying the format of the data being transmitted, ensuring that the sender and receiver correctly interpret and process the content.

    - Secure cookie: Ensures cookies are only transmitted over encrypted connections, preventing interception.
    - HttpOnly cookie: Prevents cookies from being accessed by JavaScript, reducing the risk of XSS attacks.
    - Same-site cookie: Restricts cookies to same-site or top-level requests, mitigating CSRF attacks and improving privacy.

    - JSX: JavaScript XML
      - a syntax extension for JavaScript, primarily used with React. It allows you to write HTML-like code within JavaScript, making it easier to create React components.
    - JS: JavaScript
      - a high-level, interpreted programming language used primarily for building dynamic web content. It is a core technology of the web alongside HTML and CSS.
    - AWS: Amazon Web Services
      - a subsidiary of Amazon providing cloud computing services, including computing power, storage, and other services like databases, machine learning, and more, used by developers to build scalable applications.
    - NPM: Node Package Manager
      - a package manager for JavaScript, particularly for managing dependencies in Node.js projects. It helps developers install, share, and manage libraries and tools for their JavaScript applications.
    - NVM: Node Version Manager
      - a tool that allows developers to manage multiple versions of Node.js on the same machine. It enables easy switching between different versions of Node.js for various projects.

    - The WebSocket protocol is intended to provide full-duplex communication channels over a single, long-lived connection between a client (typically a web browser) and a server.

    - React.useState is a hook that allows you to add state to functional components in React.
      - state is a setter function
      - setState updates the variable

    - React Hooks
      - useState: Allows you to add state to functional components.
      - useEffect: Handles side effects like data fetching, DOM updates, or subscriptions in functional components.
      - useContext: Allows you to access context values directly in a functional component.
      - useReducer: An alternative to useState for more complex state logic (like Redux).
      - useRef: Provides a way to access and persist mutable values across renders without causing re-renders.
      - useMemo: Memoizes expensive calculations, so they are only recalculated when necessary.
      - useCallback: Memoizes functions, preventing them from being re-created unnecessarily on every render.
      - useLayoutEffect: Similar to useEffect, but it runs synchronously after all DOM mutations. Useful for DOM measurements.

    - Node.js: a runtime environment that allows you to run JavaScript code on the server-side, outside the browser.
    - PM2: a process manager for Node.js applications that helps to keep applications running continuously, even in production environments.
    - Vite: a next-generation build tool and development server designed to provide fast and efficient development workflows for modern web projects.




