# Jallen

Jallen is a [NodeJS based Apollo Server](https://www.apollographql.com/docs/apollo-server/) that consumes multiple backend datastores and consolidates them into a single GraphQL datalayer that can be queried.

It is the data access layer that works in conjunction with [Pallen](https://github.com/kylebuscaglia/pallen) to form **Project Allen**, a SMS based personal assistant.

Jallen utilizes multple backend resources to provide the necessary data for **Project Allen**
  
    BoredAPI
    Yelp
    RandomFact
  
Each Rest API is hooked into by Jallen's backend data processing functionality to provide a single unified GraphQL endpoint for **Pallen** to query.


Installation
--------
**Step 1.** Ensure you have the latest version of NodeJS and NPM installed

    apt-get install nodejs
    apt-get install npm

**Step 2.** Clone the Jallen repository

**Step 4.** Go to the project's root directory and issue the command  
`npm install`
to install the project dependencies



**Step 6.** Start the Jallen web interface  
`npm start`

Jallen should now be up and running ready to use!

Following the instructions from the offfical Laravel installation page https://laravel.com/docs/5.8/installation is also helpful to get Pallen up and running

Demo Environment
--------
You can interact with a public instance of Jallen's GraphQL interface by browsing to [Jallen](http://jallen.bakeshow.us).
