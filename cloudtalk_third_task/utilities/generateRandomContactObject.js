const firstnames = require('./data/random_contacts/contactFirstnames.json');
const lastnames = require('./data/random_contacts/contactLastnames.json');
const companies = require('./data/random_contacts/contactCompanies.json');

const generateRandomPhoneNumber = () => {
    return `+42$ ${getRandomArbitrary(100000, 999999)}`;
};

const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generateRandomContactObject = () => {

    const firstname = firstnames[Math.floor(Math.random() * firstnames.length)];
    const lastname = lastnames[Math.floor(Math.random() * lastnames.length)];
    const company = companies[Math.floor(Math.random() * companies.length)];

    return {
        properties:
            [
                { property: 'email', value: `${firstname}.${lastname}@nonsense.com` },
                { property: 'firstname', value: firstname },
                { property: 'lastname', value: lastname },
                { property: 'website', value: `https://${firstname}.${lastname}.com` },
                { property: 'company', value: company },
                { property: 'phone', value: generateRandomPhoneNumber() },
                { property: 'address', value: '25 First Street' },
                { property: 'city', value: 'Cambridge' },
                { property: 'state', value: 'MA' },
                { property: 'zip', value: '02139' }
            ]
    };
};

module.exports = generateRandomContactObject;