function objPerson(input) {
let first = input.shift();
let second = input.shift();
let keyi = input.shift().toUpperCase();
let count = 0;
 let pass = first + second;
let password = [];
let newPassword = [];
for (const el of pass) {
    password.push(el)
}
 for (let i = 0; i<password.length; i++) {
     
     if(password[i]== "i" || password[i]== "o" ||password[i]== "a" ||password[i]== "e" ||password[i]=="u"){
        password[i] = keyi[count];
        count++
        if(count==keyi.length){count=0}
     }
 }
 console.log(`Your generated password is ${password.reverse().join('')}`)
}