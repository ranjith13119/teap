using my.bookshop as my from '../db/schema';

@(requires: ['authenticated-user'])
service CatalogService {
    @cds.query.limit.default: 20
    @cds.query.limit.max    : 100
    entity Books      as projection on my.Books;

    entity Authors as projection on my.Authors;
}
