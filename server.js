import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import db from './models';
import typeDefs from './graphql/server/typeDefs';
import resolvers from './graphql/server/resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: () => ({
        db
    }),
});

const PORT = process.env.PORT || 4000;
const app = express();
const cors = require('cors');

app.use(cors());
server.applyMiddleware({ app });

app.use(express.static('build'));

db.sequelize.sync().then(() => {
    app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`), // eslint-disable-line
    );
});
