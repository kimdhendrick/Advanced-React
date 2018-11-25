const {GraphQLServer} = require('graphql-yoga');
const Query = require('./resolvers/query.js');
const Mutation = require('./resolvers/mutation.js');
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {Query, Mutation},
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({...req, db}),
  });
};

module.exports = createServer;

