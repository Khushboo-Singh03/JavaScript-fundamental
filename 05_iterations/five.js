const coding = ['JavaScript', 'C++', 'Ruby', 'Java'];

coding.forEach( function (item){
// console.log(item);
})

coding.forEach( (item)=>{
    // console.log(item);
})


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item,index,arr)=>{
    // console.log("Item",item,"i",index,"Arr",arr);
})

// [{},{},{}] common scenario for forEach

const myCoding = [
    {
        languageName : 'JavaScript',
        languageFileName : "js"
    },
    {
        languageName : 'Java',
        languageFileName : "java"
    },
    {
        languageName : 'C++',
        languageFileName : "cpp"
    },
    {
        languageName : 'Ruby',
        languageFileName : "rb"
    },
    {
        languageName : 'Python',
        languageFileName : "py"
    }
]  

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})