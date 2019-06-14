const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./data/schema');
const { resolvers } = require('./data/resolvers');
var {
  ProductAPI, OfferAPI, InstallmentAPI
} = require('./data/connectors');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productAPI: new ProductAPI(),
      offerAPI: new OfferAPI(),
      installmentAPI: new InstallmentAPI()
    };
  }
});

server.listen({ port: 8080 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});