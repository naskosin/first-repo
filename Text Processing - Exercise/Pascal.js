function drop(input) {
    let count = 0;
    let countl = 0;
let dict = [];
let word = '';
for (const el of input) {
    countl++
    if(el.charCodeAt(0)<91 && el.charCodeAt(0)>64){
        count++;
        if(count==2){dict.push(word); word = '';count=1 }
         word += el;
        
    }else{word+=el};
    
}
dict.push(word)
console.log(dict.join(", "))
}