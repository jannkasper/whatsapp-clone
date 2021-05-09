import shortId from "shortid";

const faker = require('faker');

exports.validUser = () => ({
    externalIdentifier: shortId.generate(),
    username: faker.name.firstName().toLowerCase(),
    phoneNumber: Math.floor(Math.random() * 1000000000),
    password: 'password',
});

exports.validMessage = (userExtId, receiverExtId) => ({
    type: 'text',
    value: faker.lorem.sentence(),
    userExtId: userExtId,
    receiverExtId: receiverExtId,
    created: Date.now()
});
