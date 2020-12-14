function objPerson(input) {
    let strings = input.split(" ");
    let alphabet = {};
    let str = "";
    let count = 1;
    for(let i = 97 ; i<=122; i++){
        
    alphabet[String.fromCharCode(i)] = count;
    count++
    }let sum = 0;
    for (const el of strings) {
        if(el.length==0){continue}
            
            let first = el[0];
            
            let numbered =Number(el.slice(1,el.length-1));
            let second = el[el.length-1] 
            if(first.charCodeAt()>64 && first.charCodeAt()<=90){
                sum+=numbered/alphabet[(first.toLowerCase())]
            }else{sum+=numbered*alphabet[first]};
            if(second.charCodeAt()>64 && second.charCodeAt()<=90){
                sum-=alphabet[(second.toLowerCase())]
            }else{sum+=alphabet[second]};
        }
    
     console.log(sum.toFixed(2))
    }