# My Class Notes
*I get to use these notes on the midterm*

[[Link to README]] (README.md)

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


