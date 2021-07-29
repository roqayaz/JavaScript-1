const giveCompliment = (name) => {
    const compliments = ['great', 'awesome', 'wonderful', 'amazing', 'hard-working', 'excellent', 'good', 'fantastic', 'kind', 'nice'];
    const randomCompliment = compliments[Math.floor(Math.random()*compliments.length)];
    return `You are ${randomCompliment}, ${name}!`;

};
console.log(giveCompliment('Roq'));
console.log(giveCompliment('Roq'));
console.log(giveCompliment('Roq'));