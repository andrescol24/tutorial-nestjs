# RESUMEN
This proyect was make watching the video https://www.youtube.com/watch?v=NYoCbihISxw&list=WL&index=25&t=594s about Nest Js.

Nest Js use Express as dependency and you can write the code in TypeScript or JavaScript. Before to begin you have to install:
1. Node Js with npm 
2. Install NestJs with the command: ```npm i -g @nestjs/cli```

## Project creation
To create the project use the command: ```nest new {projectName}```

## Project structure
- src: this folder has the main code
- package.json and package-lock.json: contains the node configuration
- nest-cli.json: has the Nest configuration
- tsconfig.json: As Nest uses TypeScript this project has that configuration in this file. It includes compilation configuration

## Code src/
- main.ts: it's the main class that execute the application
- **.service.ts: It's the business layer
- **.controller.ts: It's the rest layer
- **.module.ts: It's the definition layer, on this file you have to define the services and controllers that are in your application

## Execution
To run this proyect you can execute the commands:
- ```npm start```
- ```npm run start:dev``` with this command you will be able to run the project and make changes over the code and those change automatically will be applied

## Generation
You can generate new components such as services, controllers and more, for example:
- ```nest generate controller tasks``` this command will generate a controller named tasks

## Modules
All Nest Js projects has a main module (app.module.ts) and when you create others modules those modules will be sud-modules of the main module.

## ORM
To install the ORM of NestJs for MongoDB use this command (https://docs.nestjs.com/techniques/mongodb): 
-```npm install --save @nestjs/mongoose mongoose```
- ```npm install @types/mongoose -D``` this command is to install the autocomplete for mongoose