# [OpenZeppelin SDK Reference Project](https://superblocks.com/d/superblocks/workspaces/reference-projects/5e81dee85c27530018e59ffb)

[![Superblocks](https://superblocks.com/d/superblocks/projects/reference-projects.svg?branch=master)](https://superblocks.com/d/superblocks/workspaces/reference-projects)

OpenZeppelin SDK reference repository to showcase Superblocks functionality on how to build and deploy your Ethereum contract projects. 

This is a sample project with a single contract for getting started with the OpenZeppelin SDK. Head over to their [documentation](https://docs.openzeppelin.com) to learn more about Open Zeppelin SDK.


## Features this project showcases
* Fully automate your build proccess using Superblocks CI and the Open Zeppelin framework
* Automate, track, sing and deploy your transactions using Superblocks and OZ deploy


## Quick start
Below is described how to get the an **OpenZeppelin** project setup and running locally.


### Testing locally 
- Install dependencies with `npm install`
- Start a ganache instance with `npx ganache-cli -p 8545 -d`
- Create a new `Counter` contract instance with `npx openzeppelin deploy Counter --network development --kind regular --no-interactive`

<br/>

## Setup 
TDB - Missing how to setup a project using Superblocks and OpenZeppelin 

### Configure your ENV variables

Env variables to setup for the initial config:
TOKEN -> A generated project token in the Superblocks platform. 
PROJECT_ID -> The deployment space id into which you want to track your deployment with. 

In order to get this values setup, follow the this instructions: 

#### PROJECT_ID
1. Login into Superblocks using your Github user.
2. If you haven't created an organization/project, create one.
3. Once your project is created, head to the project settings
4. You will find the project id under the General section

#### DEPLOY_TOKEN
1. Login into Superblocks using your Github user.
2. If you haven't created an organization/project, create one.
4. Once your project is created, head to the project settings
5. Go to the section `Tokens`, give your token a fancy name and click in `Generate`. Copy the generated key. 
6. Finally set "TOKEN" env variable for that project with project id obtained on step 5.


<br/>

## Performing the deployment (Running the Open Zeppelin deployment script)
```
npx openzeppelin deploy Counter --network development --kind regular --no-interactive
```












 
 








