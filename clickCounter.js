// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get a cookie
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Function to update the click count
  function updateClickCount() {
    let clickCount = getCookie("clickCount");
    if (clickCount) {
      clickCount = parseInt(clickCount) + 1;
    } else {
      clickCount = 1;
    }
    setCookie("clickCount", clickCount, 30); // Cookie expires in 30 days.
    document.getElementById("clickCountDisplay").textContent = clickCount;
  }
  
  // Initialize the display with the current count
  window.onload = function() {
    let initialCount = getCookie("clickCount") || 0;
    document.getElementById("clickCountDisplay").textContent = initialCount;
  };
  
  // Event listener for the button click
  document.getElementById("clickButton").addEventListener("click", updateClickCount);