# MERN Stack 
  ## Nodejs
  ## ExpressJs
  ## Mongodb  + Sql
  ## ReactJs + Nextjs

# Language Javascript with Typescript 
  - Basics & Variables and Constants 
  - Data types 
    - Array and objects 
  - Operators & Control Statments 
  - Functions 
    - Async
  - ES Standard 
  - Oop js 
# Git 
  - Operations 
  - Branching 
  - PR
# Nodejs With Express 
  - Server 
  - Package 
  - Express Server 
  - Features 
# Db Introduces
  - Relational And Non-relational 
  - SQL and NoSQL
  - Integration + Express app ============> API Server
# Socket Programming 
  - chat app + React 
# Frontend 
  - HTML 
  - CSS 
  - Tailwind
  - Typescript 
# React Js 
  - 

### Git Commands 
  - Setup (Local codebase do exists now publish to server/git)
    - `git init` - Local repo initialization
    - `git remote add origin <url>` - connecting remote link to the current local repo
  - if someone gives you access to git and you need to setup the code in your local 
    - `git clone <url>` - it will create a directory with your git repo name 
  
  - Start developing your code 

  - Staging the codes / commit 
    - `git add .`  - it will add all the changes you made on your local repo
    - `git commit -m "Your message"` -  it will commit your changes, every comming is assigned with a code 

  - Push operation (upload to repo)
    - for push operation firstly commit your local changes 
      - `git push origin <localbranch>[:<remoteBranch>]` - e.g. locally, main `git push origin main:dev`
    - if there are any changes on git but you don't have them locally, 
      - first do pull operation
      - then the code gets merged (if no conflict)
      - and then push your code
  - Pull operation (download from repo)
    - for pull operation, firstly, commit your changes 
      - `git pull origin <remoteBranchName>` - e.g. `git pull origin dev`
    - sometimes during pull operation your code might get caught with conflict 
      - In such case manually resolve those conflicts and commit your code again 

  - General Commands 
    - `git status`  - current git status 
    - `git branch` - to view the list of avaiable local branches
  - Regarding Branches 
    - `git checkout -b <branchName>` it will create a new branch with reference to your current branch
    - `git checkout <branchName>` it will switch to an existing branch 
    - `git branch -D <branchName>` it will remove branch from your local repo


                github repo

Desktop/                                            /D/
git practice/                                         mern_stack/ 
  .git/                                                  .git/
    - commit status =>                                       
      ./pull
  mern_stack/
    .git/
      -changes