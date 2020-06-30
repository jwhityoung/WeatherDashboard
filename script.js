 var searchButton = $("#search-button");
    var cityInput = $("#city-input")  
    

    cityInput.val(localStorage.getItem("cityEntry"));

    // $(".cityresults").hide();
    // $(".w-25").hide();
    // $(".searchacity").hide();

searchButton.on("click", function firstSearch() {
    event.preventDefault();
    
    //Capturing the city input by user and adding it to the list 
    var cityUser = cityInput.val();
    var city = cityUser.charAt(0).toUpperCase() + cityUser.substr(1).toLowerCase();
    console.log(city);
    localStorage.setItem("city", city);
    var cityList = $("<btn>");

    cityList.addClass("btn btn-success");
    cityList.text(city);
    $(".citylist").append(cityList);
 


    $(".cityresults").show();
    $(".w-25").show();  
 
   
    
  
    var date = (moment().format('(MMMM Do, YYYY)'));
var day1 = moment().add(1, 'day').format('l');
var day2 = moment().add(2, 'days').format('l');
var day3 = moment().add(3, 'days').format('l');
var day4 = moment().add(4, 'days').format('l');
var day5 = moment().add(5, 'days').format('l');

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=6&appid=1e76024b927ca7984117dc9aadba311e";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     console.log(response);
     var tempF = Math.floor(response.list[0].main.temp - 273.15) * 1.80 + 32;

     $("#city-namedate").text(city + "     " + date);
     $(".temp").text("Temperature: " + Math.floor(tempF) + " °F")
        $(".humidity").text("Humidity: " + response.list[0].main.humidity + " %");
        $(".windspeed").text("Wind Speed: " + response.list[0].wind.speed + " mph");

        // $(".uv").text("UV Index: " + response.current.uvi);

        var temp1 = Math.floor(response.list[1].main.temp - 273.15) * 1.80 + 32;
        var temp2 = Math.floor(response.list[2].main.temp - 273.15) * 1.80 + 32;
        var temp3 = Math.floor(response.list[3].main.temp - 273.15) * 1.80 + 32;
        var temp4 = Math.floor(response.list[4].main.temp - 273.15) * 1.80 + 32;
        var temp5 = Math.floor(response.list[5].main.temp - 273.15) * 1.80 + 32;
        
       $("#date1").text(day1);
        $("#temp1").text("Temp: " + Math.floor(temp1) + " °F");
        $("#humidity1").text("Humidity: " + response.list[1].main.humidity + " %");
        
        
        $("#date2").text(day2);
        $("#temp2").text("Temp: " + Math.floor(temp2) + " °F");
        $("#humidity2").text("Humidity: " + response.list[2].main.humidity + " %");

        $("#date3").text(day3);
        $("#temp3").text("Temp: " + Math.floor(temp3) + " °F");
        $("#humidity3").text("Humidity: " + response.list[3].main.humidity + " %");
        
        $("#date4").text(day4);
        $("#temp4").text("Temp: " + Math.floor(temp4) + " °F");
        $("#humidity4").text("Humidity: " + response.list[4].main.humidity + " %");
        
        $("#date5").text(day5);
        $("#temp5").text("Temp: " + Math.floor(temp5) + " °F");
        $("#humidity5").text("Humidity: " + response.list[5].main.humidity + " %");
        
         //Icons
   
        var iconCode = response.list[0].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        $(".icon").html("<img src='" + iconUrl + "'>");
        $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    

        var iconCode1 = response.list[1].weather[0].icon;
        var iconUrl1 = "http://openweathermap.org/img/w/" + iconCode1 + ".png";
     
        
        $("#emoji1").html("<img src='" + iconUrl1  + "'>");
        $("#emoji1").html("<img src='http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    
        var iconCode2 = response.list[2].weather[0].icon;
        var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode2 + ".png";
     
        
        $("#emoji2").html("<img src='" + iconUrl2  + "'>");
        $("#emoji2").html("<img src='http://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    

        var iconCode3 = response.list[3].weather[0].icon;
        var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode3 + ".png";
     
        
        $("#emoji3").html("<img src='" + iconUrl3  + "'>");
        $("#emoji3").html("<img src='http://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    
        var iconCode4 = response.list[4].weather[0].icon;
        var iconUrl4 = "http://openweathermap.org/img/w/" + iconCode4 + ".png";
     
        
        $("#emoji4").html("<img src='" + iconUrl4 + "'>");
        $("#emoji4").html("<img src='http://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    
        var iconCode5 = response.list[5].weather[0].icon;
        var iconUrl5 = "http://openweathermap.org/img/w/" + iconCode5 + ".png";
     
        
        $("#emoji5").html("<img src='" + iconUrl5  + "'>");
        $("#emoji5").html("<img src='http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    

   
  });

})


$(".btn").on("click", function () {
console.log($(".btn").val());
})
  




