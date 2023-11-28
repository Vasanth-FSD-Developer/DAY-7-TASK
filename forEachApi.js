//c.Print the following details name, capital, flag using forEach function

//STEP 1
let eachApi = new XMLHttpRequest();

//STEP 2
eachApi.open("GET", "https://restcountries.com/v3.1/all");

//STEP 3
eachApi.send();

//STEP 4
eachApi.onload = function(){
    var res2 = JSON.parse(eachApi.response);
    var ress = res2.forEach(element => {
        console.log(element.name);
            console.log(element.capital);
            console.log(element.flag); 
    
       });
    }