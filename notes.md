# My Class Notes
*I get to use these notes on the midterm*

[Link to README](README.md)

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
- <a> is for hyperlink <link> is for linking CSS and others
    - wrap <img> with <a> to make image a hyperlink
- CSS: Class (.) ID (#)
- valid JSON: {"x":3}
- JSON is purely a string with a specified data format — it contains only properties, no methods. JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
- comsole commade for a script executable (chmod +x deploy.sh)
- flex forms child elements into a row or a column
- use <!DOCTYPE html> to start html file
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



