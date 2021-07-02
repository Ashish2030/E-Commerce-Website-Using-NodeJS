const mongoose = require('mongoose');
const Product = require('./models/product');

const arr = [
    {
        name: 'iphone',
        img:'https://images.unsplash.com/photo-1556656793-08538906a9f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 999999,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Macbook Pro',
        img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 8888888,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Macbook Air 2015',
        img:'https://images.unsplash.com/photo-1517430868310-0bc91ef7d89a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 999999,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Titan Watch',
        img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 2000,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'HP Laptop',
        img:'https://images.unsplash.com/photo-1550623627-e7fb17e89941?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 88888,
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },
    {
        name: 'Apple Series',
        img:'https://images.unsplash.com/photo-1613398773682-9e272a85f203?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGxhcHRvcHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: '555555',
        desc:"The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007."
    },

]



function seedDB() {
    
    Product.insertMany(arr)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })

}

module.exports = seedDB;