const cds = require('@sap/cds')
const logger = cds.log('catalog-service'); // Named logger for the service


class CatalogService extends cds.ApplicationService {
    init() {

        const { Books } = cds.entities('my.bookshop')

        logger.info('Catalog service is starting up...');

        // Add some discount for overstocked books
        this.after('each', "Books", book => {
            logger.debug(`Handling READ request for Books and the stock is ${book.stock}` );
            console.log(book.title)
            if (book.stock > 111) book.title += ` -- 11% discount!`
        })

        // Delegate requests to the underlying generic service
        return super.init()
    }
}

module.exports = CatalogService
