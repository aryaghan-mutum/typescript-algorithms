var faker = require('faker');
var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard();
console.log(randomName);
// console.log(randomEmail)
console.log(randomCard);
console.log("2");
