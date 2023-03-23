const companies = [
    { name: 'Google', category: 'P', start: 1998, end: 2004 },
    { name: 'Facebook', category: 'S', start: 2004, end: 2008 },
    { name: 'Uber', category: 'S', start: 2008, end: 2010 },
    { name: 'Amazon', category: 'P', start: 1994, end: 2008 },
    { name: 'Apple', category: 'P', start: 1996, end: 2008 },

];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//forEach function
companies.forEach((company) => {
   console.log(company.name) 
});


//filter function
const age = ages.filter(function (age) {
    if (age >= 20) {
        return true;
    }
}) 
console.log(age)

//optimized filter function for ages
const finalAges = ages.filter((age) => (age >= 20))
console.log(finalAges)


//filter function for service based companies
const s = companies.filter(function (company) {
    if (company.category === "S") {
        return true;
    }
})
console.log(s) 

//optimized filter function for s
const sb = companies.filter((company) => (company.category === "S"))
console.log(sb)

//map function
companies.map((company,index)=> {
    console.log(company,index)    
})

//sort function in ascending
const sorted = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;    
    }
    
})
console.log(sorted);

//optimized sort function in ascending
const sorted1 = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
console.log(sorted)

const sortedAges = ages.sort((a, b) => (a - b))
console.log(sortedAges)


//reduce function 
const sumage = ages.reduce((total, age) => total + age, 0)
console.log(sumage)