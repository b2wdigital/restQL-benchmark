const resolvers = {
    Query: {
        async allProducts(_source, _args, { dataSources }) {
            return dataSources.productAPI.getAll();
        }
    },
    Product: {
        async offer(product, _args, { dataSources }) {
            return dataSources.offerAPI.getOffer(product.id);
        }
    },
    Offer: {
        async installments(offer, _args, { dataSources }) {
            return dataSources.installmentAPI.getInstallments(offer.id);
        }
    }
};

module.exports = {
    resolvers
};