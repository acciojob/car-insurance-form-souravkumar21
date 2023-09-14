//your code here
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    // Construct the URL and redirect the user
    var baseUrl = "YOUR_BASE_URL_HERE";
    var redirectUrl = baseUrl + "/main.html";
    window.location.href = redirectUrl;
});
