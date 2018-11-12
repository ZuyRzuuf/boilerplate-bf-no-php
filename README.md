# boilerplate-bf-no-php

This is another boilerplate for backend/frontend app.

Boilerplate is dockerized with Docker Compose.

**Backend:**
- NodeJS [https://nodejs.org/en/]
- ExpressJS [http://expressjs.com/]
- Sequelize 3.x [https://sequelize.readthedocs.io/en/v3/]
- Apollo Server 2.x [https://www.apollographql.com/docs/apollo-server/]

**Database:**
- MySQL 5.7.x [https://www.mysql.com/]

Database can be easily changed by change the dialect in the Sequelize config.
Possible dialects:
- MySQL
- PostgreSQL
- MSSQL
- SQLite

**Frontend:**
- NodeJS [https://nodejs.org/en/]
- Webpack 4.x [https://webpack.js.org/]
- Babel 7.x [https://babeljs.io/]
- ESLint [https://eslint.org/]
- React 16.x [https://reactjs.org/]
- Apollo Client 2.x [https://www.apollographql.com/docs/react/]
- Enzyme 3.x [https://airbnb.io/enzyme/]
- Jest 23.x [https://jestjs.io/]

Rules for ESLint meet Airbnb React/JSX Style Guide (aka best practices) 
[https://github.com/airbnb/javascript/tree/master/react]

Package `"babel-core": "^7.0.0-bridge.0"` is necessary because of Jest issue:
`Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core, 
it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error 
to look for the first entry that doesn't mention "@babel/core" or "babel-core" to see what is calling Babel.`
[https://github.com/babel/babel/issues/8206#issuecomment-419705758]

**Details:**
TBA

It is possible to switch backend to PHP with Symfony 4.x and Doctrine.
Setup will be defined later if it will be necessary. But for GraphQL is better to use Node than PHP.
