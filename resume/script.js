var apiUrl = "https://potl5cdpxi.execute-api.us-east-1.amazonaws.com/prod/product";
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById('count').innerHTML = data
        console.log(data)
    });

$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});