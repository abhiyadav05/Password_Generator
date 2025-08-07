let passwordBox=document.getElementById("password_box")
let copyBtn=document.getElementById("copy")
let yesBtn=document.getElementById("yes")

//  when we use onclick on javascript and get any clss and make varial
// then it will return the array so we can use [0] or write in loop
//  in the class return like an array so we use index 
// ignoring for it we can use the id because it is unique and we can 
// also use queryselector 
let generateBtn=document.querySelector(".my-button")

  
function generatePassword(){
    let createPassword="";
    const lowerChar="abcdefghijklmnopqrstuvwxyz"
    const upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const specialChar="!#$%&*+-/?@"
    const numberChar="0123456789"
    const allChar=lowerChar+upperChar+numberChar+specialChar

    createPassword+=upperChar[(Math.floor(Math.random()*upperChar.length))]
    createPassword+=lowerChar[(Math.floor(Math.random()*lowerChar.length))]
    createPassword+=specialChar[(Math.floor(Math.random()*specialChar.length))]
    createPassword+=numberChar[(Math.floor(Math.random()*numberChar.length))]

    while(12>createPassword.length){
          createPassword+=allChar[(Math.floor(Math.random()*allChar.length))]
    }
    passwordBox.value=createPassword;
    console.log(createPassword)
}

//  document.getElementsByClassName("my-button").onclick=function(){
//         generatePassword();
//     }

generateBtn.onclick=function(){
    generatePassword()
    showCopyBtn()
}
// generatePassword()


// this is the section of copy btn

copyBtn.onclick = function() {
    copyBtn.style.display = "none";
    yesBtn.style.display = "inline-block";

    navigator.clipboard.writeText(passwordBox.value)
}


function showCopyBtn(){
    copyBtn.style.display="inline-block"
    yesBtn.style.display="none"
}