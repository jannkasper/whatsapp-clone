import shortId from "shortid";

const faker = require('faker');

exports.validUser = () => ({
    externalIdentifier: shortId.generate(),
    username: faker.name.firstName().toLowerCase(),
    phoneNumber: 555666777,
    password: 'password',
});
