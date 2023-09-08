function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
    three()
}

one()
two()
three()

