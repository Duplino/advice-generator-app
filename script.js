var url = "https://api.adviceslip.com/advice";
function get_advice() {
fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    var advice = data.slip;
    document.getElementById("advice_id").innerHTML = advice.id;
    document.getElementById("advice_content").innerHTML = advice.advice;
  }).catch(function() {
    console.log("Booo");
  });
}
//button on click
document.getElementById("advice_button").addEventListener("click", get_advice);