//d.Print the total population of countries using reduce function
 
//STEP 1
let popApi = new XMLHttpRequest();

//STEP 2
popApi.open("GET", "https://restcountries.com/v3.1/all");

//STEP 3
popApi.send();

//STEP 4;
popApi.onload = function(){
    var res3 = JSON.parse(popApi.response);
    var popTotal = res3.reduce((acc,ele)=>acc+ele.population,0);
    console.log(popTotal);

}

// ouput : 7777721563