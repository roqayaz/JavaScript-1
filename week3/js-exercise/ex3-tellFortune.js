const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ['Timmy', 'DAvid', 'Leo', 'Tom', 'ryan'];
const locations = ['Paris', 'London', 'Tokyo', 'Amsterdam', 'Ottawa'];
const jobs = ['Full stack developer', 'Farmer', 'Florist', 'Editor', 'chef'];

const tellFortune = (numChild, namePartner, location, job ) => {
    const randomArr = arr => { return arr[Math.floor(Math.random()*arr.length)]};
    console.log(`You will be a ${randomArr(job)} in ${randomArr(location)}, married to ${randomArr(namePartner)} with ${randomArr(numChild)} kids.`)
};

tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);