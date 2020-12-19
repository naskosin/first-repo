function objPerson(sent, one) {
    sent = sent.split(", ")
     for (const el of sent) {
         
     
    one= one.replace("*".repeat(el.length),el );}console.log(one)
    
   }