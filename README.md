# GraphQL + Express + MongoDB
Test app to apply GraphQL + Express + MongoDB.

This project focus on use of the follow stack: 

MongoDB (https://docs.mongodb.com/)

Express (https://expressjs.com/)

GraphQL (http://graphql.org/)

## Tools and Super Libs present in this project

This project use mongoose(http://mongoosejs.com/) to access MongoDB from Node application server.

Feel free to improve and apply an better approach.

## Prerequistes

1 - Install Node.js and update npm (https://docs.npmjs.com/getting-started/installing-node)

2 - I assume you know MongoDB and already use to your study ;) (https://docs.mongodb.com/manual/mongo/)

3 - Turn up the MongoDB server:

$> mongod

4 - In another terminal window, connect on MongoDB:

$> mongo

5 - After step 4, create a database named by 'graphql' and create-populate a simple collection for this test:

$> use graphql

$> db.people.save({firstName: "Fred", age: 35})

$> db.people.save({firstName: "Vivian", age: 30})

6 - For check step 5:

$> db.people.find({})


## Run

Go to root directory and run: npm install

After that, run: npm run dev

This command will execute server.js file. If you want change it, please go to package.json and change "scripts" ;)

## How Test?

This url bellow access the specific person on MongoDB using express-route.

- http://localhost:3000/people/5907a3c15ca1bb9c5d78cb6e

If you set "NODE_ENV" environment variable to indicade "development", you gain power to access GraphQL interface to check and test. The velidation of this variable is made automatically here ... https://github.com/fr3d3rico/graphql_express_mongodb/blob/master/server.js#L24-L28

- http://localhost:3000/graphql

Whether you forgot set "NODE_ENV" and wanna test faster! Go with this link and remenber, don't forget "query" url param.

![alt tag](https://github.com/fr3d3rico/graphql_express_mongodb/blob/master/images/no_node_env.png)

- http://localhost:3000/graphql?query={person(_id:%225907a3c15ca1bb9c5d78cb6e%22){firstName}}

![alt tag](https://github.com/fr3d3rico/graphql_express_mongodb/blob/master/images/yes_node_env.png)


Good Luck!