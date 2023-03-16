let cityData, userInput;

const $city = $('#city')
const $temp = $('#temp')
const $feels = $('#feels')
const $weather = $('#weather')
const $input = $('input[type="text"]')

$('form').on('submit', handleGetData)



function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=69b588fb75605ff2206f861816851de0&units=imperial`
      }).then(
        (data) => {
            console.log(data);
         cityData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $city.text(cityData.name)
    $temp.text(cityData.main.temp)
    $feels.text(cityData.main.feels_like)
    $weather.text(cityData.weather[0].main)

}
