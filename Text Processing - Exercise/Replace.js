function drop(input) {
    let newOne =[];
    for (let i = 0; i<input.length; i++) {
        if(input[i]!==input[i+1]){
            newOne.push(input[i])
        }
        
    }
    console.log(newOne.join(""))
    }