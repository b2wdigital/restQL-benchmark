const { RESTDataSource } = require('apollo-datasource-rest');

const TANKER_ENDPOINT = process.env.TANKER_ENDPOINT;
const TANKER_MULTI_PRODUCTS_RESPONSE_TIME = process.env.TANKER_MULTI_PRODUCTS_RESPONSE_TIME || 'responseTime=1000';
const TANKER_INSTALLMENTS_RESPONSE_TIME = process.env.TANKER_INSTALLMENTS_RESPONSE_TIME || 'responseTime=1000';
const TANKER_OFFER_RESPONSE_TIME = process.env.TANKER_OFFER_RESPONSE_TIME || 'responseTime=1000';

console.log("TANKER_ENDPOINT: ", TANKER_ENDPOINT);
console.log("TANKER_MULTI_PRODUCTS_RESPONSE_TIME: ", TANKER_MULTI_PRODUCTS_RESPONSE_TIME);
console.log("TANKER_INSTALLMENTS_RESPONSE_TIME: ", TANKER_INSTALLMENTS_RESPONSE_TIME);
console.log("TANKER_OFFER_RESPONSE_TIME: ", TANKER_OFFER_RESPONSE_TIME);

class ProductAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = TANKER_ENDPOINT;
    }

    async getAll() {
        return this.get(`multiProducts?${TANKER_MULTI_PRODUCTS_RESPONSE_TIME}`);
    }
}

class InstallmentAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = TANKER_ENDPOINT;
    }

    async getInstallments(offerId) {
        return this.get(`installments?${TANKER_INSTALLMENTS_RESPONSE_TIME}&offer.id=${offerId}`);
    }
}

class OfferAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = TANKER_ENDPOINT;
    }

    async getOffer(productId) {
        return this.get(`offer?${TANKER_OFFER_RESPONSE_TIME}&product.id=${productId}`);
    }
}

module.exports = {
    ProductAPI, InstallmentAPI, OfferAPI
};