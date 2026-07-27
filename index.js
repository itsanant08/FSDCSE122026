//console.log("Hey ....using JS development")
// console.log("Using JS")



// const data = function (msg){
//     return "Hello, I m using JS "+msg
// }
// data ("and Node")



// //IIFE
// (()=>{console.log"Hey..using and calling by IIFE})();



// function sum(a,b){
//     return a+b;

// }
// function sumWithMsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("Hey,your result ="+result+"!! Well done"+msg)
// }
// sumWithMsg(sum,"Rahul")


function login (msg,error){
    if (error){
        console.log("Error is "+error)
    }
    

}

function loginHandler(username,password,clbk){
    if (username == "ptomer40"&& password=="12345"){
        clbk("success",null);
    }else{
        clbk(null,"Username or password is incorrect")
    }
}
loginHandler("aki-len","123456",login)