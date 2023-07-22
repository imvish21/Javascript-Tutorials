// const hello = require("./module1")
// hello.hello()
// hello.Ahello("vishal")

//ES6 modules
export const hello = () =>{
    console.log("Hello harry");
}
export const Ahello = (name) =>{
    console.log("Hello harry" + name);
}
const vishal = () =>{
    console.log("Hello vishhhh")
}
export default vishal;
// module.exports = {hello,Ahello};