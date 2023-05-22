function countdown() {
    var endDate = new Date("2023-05-31T00:00:00Z");
    var now = new Date();

    var distance = endDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = ("0" + days).slice(-2);
    document.getElementById("hours").textContent = ("0" + hours).slice(-2);
    document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);
    document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);
  }

  setInterval(countdown, 1000);

  document.getElementById("subscription-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var emailInput = document.getElementById("email-input");
    var email = emailInput.value;

    if (!validateEmail(email)) {
      showMessage("Invalid email");
      return;
    }

    setTimeout(function() {
      showMessage("Subscription successful");
    }, 1000);
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function showMessage(message) {
    var popup = document.getElementById("popup");
    var popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    popup.style.display = "flex";
    setTimeout(function() {
      popup.style.display = "none";
    }, 3000);
  }
