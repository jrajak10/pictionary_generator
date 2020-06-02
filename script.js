function list(){
    let food = ['apple', 'pear', 'grapes', 'cherry', 'tomato'];
    let drink = ['tea', 'coffee', 'milk', 'coke', 'vodka', 'beer', 'wine']
    let animals = ['elephant', 'cat','dog', 'cow', 'horse', 'giraffe']
    
    let total = food.concat(drink).concat(animals);
    let newArr = [];
    
    for(let i=1; i<11; i++){
      let random = Math.floor(Math.random() * total.length)
      if(newArr.indexOf(total[random]) === -1){
        let x = total.splice(random, 1)
        newArr.push(' ' + x[0])
      }
    }
    return newArr
    
    
    }
    


    window.onload = function(){
        document.getElementById("list").innerHTML = list()

    }
    