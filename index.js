const favegames = [
    "link to the past",
    "breath of the wild",
    "super smash bros ultimate",
    "slay the spire",
    "rocket league"
]

let updatedList = ["barbie dreamhouse 2", ...favegames];
const [...games] = favegames;
console.log(updatedList);


const lttp = {
    Name: "Legend of Zelda Link to the Past",
    Company: "Nintendo",
    Year: 1991,
    Genre: "Adventure"
}

const {Company, Name, ...details} = lttp;
console.log(details);

const island = {
    name: "Secret of Monkey Island",
    company: "LucasArts",
    ...details
}
console.log(island);

function repeater(times, action){
    for(let i=0; i<times;i++){
        action();
    }
}
repeater(10,function(){console.log("woooooahhhh!!!")});
// =================================
// Alt syntax
repeater(10,()=>{console.log("Wooooahhhhh!!")});


const arrowRepeater = (times,action) => {
    for(let i = 0; i < times; i++){
        action();
    }
}
arrowRepeater(5, ()=>{console.log("5 times!")});
arrowRepeater = "hey there!";
arrowRepeater();

const someNums = [4,8,15,16,23,42];
console.log(someNums.map((num)=>{return num * 2}));
console.log(someNums.filter((num)=>{return num % 2 === 0}));
console.log(someNums.filter((num)=>{return num % 2 === 0}).map((num)=>{return num * 2}));