//b.Get all the countries with a population of less than 2 lakhs using Filter function

//step 1

var pop = new XMLHttpRequest();

//STEP 2
pop.open ("GET", "https://restcountries.com/v3.1/all");

//STEP 3
pop.send();

//STEP 4;
pop.onload= function(){
    var res1 = JSON.parse(pop.response)
    var findPop = res1.filter((ele)=>ele.population<200000);
    console.log(findPop);
}