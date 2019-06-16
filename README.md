# Jallen

Jallen is a [NodeJS based Apollo Server](https://www.apollographql.com/docs/apollo-server/) that consumes multiple backend datastores and consolidates them into a single GraphQL datalayer that can be queried.

It's the data access layer that works in conjunction with [Pallen](https://github.com/kylebuscaglia/pallen) to form **Allen**, a SMS based personal assistant.

Jallen utilizes multiple backend resources to provide the necessary data for **Allen**
  
    BoredAPI
    Yelp
    RandomFact
  
Each Rest API is hooked into by Jallen's backend data processing functionality to provide a single unified GraphQL endpoint for **Pallen** to query.

Arcitecture Overview
--------
![Image of Allen-Architecture]( https://raw.githubusercontent.com/kylebuscaglia/jallen/master/Allen-Architecture.jpeg )

Installation
--------
**Step 1.** Ensure you have the latest version of NodeJS and NPM installed

    apt-get install nodejs
    apt-get install npm

**Step 2.** Clone the Jallen repository

**Step 3.** Go to the project's root directory and issue the command  
`npm install`
to install the project dependencies

**Step 4.** Start the Jallen web interface  
`npm start`

Jallen should now be up and running ready to use!

Demo Environment
--------
You can interact with a public instance of Jallen's GraphQL interface by browsing to [Jallen](http://jallen.bakeshow.us).
