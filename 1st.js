// const start = performance.now();

// console.time("Task");
const firstArray = []
const set = new Set();
const secondArray = []
for (let i = 0; i<= 6000000; i++)
{
    if (i <= 3000000)
    {
        firstArray.push(i);
    }
    else
    {
        secondArray.push(i);
    }
}

console.log("firstArray.length:", firstArray.length);
console.log("secondArray.length:", secondArray.length);

// console.time("map1");
const firstUserList =  firstArray.map((number) => ({
    userId: number
}));
// console.timeEnd("map1");

// console.time("map2");
const secondUserList =  secondArray.map((number) => ({
    userId: number
}));


console.log("find")
const user = secondUserList[4000000];
console.timeEnd("find");
// console.timeEnd("map2");


// console.timeEnd("Task");
// const end = performance.now();

// console.log(`This code took ${end - start} milliseconds to execute`);
