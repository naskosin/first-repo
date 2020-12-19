function objPerson(sent) {
  
    let last = sent.split("\\")
   
    let lastOne = last.pop();
    
    let a = lastOne.lastIndexOf(".");
    let first = lastOne.substring(0,a);
    let second = lastOne.substring(a+1)
   console.log(`File name: ${first}`)
   console.log(`File extension: ${second
   }`)
    
    
   }