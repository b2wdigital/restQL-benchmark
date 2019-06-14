const { gql } = require('apollo-server');

const typeDefs = gql`

  type Installment {
    installments: String
  }

  type Offer {
    id: String
    price: String
    installments: Installment
  }

  type Product {
    id: String
    name: String
    offer: Offer
  }

  type Query {
    allProducts: [Product]
  }
`;

module.exports = {
  typeDefs
};

