const cartForParty = {
    beers: 10,
    chips: 5.75,
    bananas: 8.64,
    dip: 6,
    wine: 36.5
};

 const calculateTotalPrice = obj => {
     const sum = Object.values(obj).reduce((a, b) => a + b);
     console.log(`Total: €${sum}`)

    };

 calculateTotalPrice(cartForParty);

 
