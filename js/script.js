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
        url:`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=4bc9d3ba`
      }).then(
        (data) => {
         movieData = data;
         render();
        },
        (error) => {
         console.log('bad request', error);
        }
    );    
}

function render() {
    $city.text(cityData)
}
    