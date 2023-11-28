//e.Print the country which uses US Dollars as currency

//STEP 1;
let dollarApi = new XMLHttpRequest();

//STEP 2;
dollarApi.open("GET","https://restcountries.com/v2/all");

//STEP 3;
dollarApi.send();

//STEP 4;
dollarApi.onload = function(){
    var res4 = JSON.parse(dollarApi.response);
    var useDollar = res4.filter((ele)=>ele.currencies=="dollar");
    let findCountry = useDollar.map((ele)=>ele.currencies);
    console.log(findCountry);
   
}