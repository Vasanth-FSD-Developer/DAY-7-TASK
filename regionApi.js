//a.Get all the countries from the Asia continent /region using the Filter function

// step 1:
var request = new XMLHttpRequest();
//step 2
request.open ("GET","https://restcountries.com/v3.1/all");
//STEP 3
request.send();
// step 4
request.onload = function(){
    var result = JSON.parse(request.response);
    var a = result.filter((ele)=>ele.region==="Asia");
    console.log(a);
}

