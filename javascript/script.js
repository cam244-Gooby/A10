function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
  displayCookie();
}

function getCookie(name) {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name + "=") === 0) {
      return c.substring(name.length + 1, c.length);
    }
  }
  return "";
}

function displayCookie() {
  let user = getCookie("username");
  if (user !== "") {
    document.getElementById("cookieDisplay").innerText =
      "Welcome back, " + user + "!";
  } else {
    let userInput = prompt("Enter your name to save a cookie:");
    if (userInput) {
      setCookie("username", userInput, 7);
    } else {
      document.getElementById("cookieDisplay").innerText = "No cookie saved.";
    }
  }
}

window.onload = displayCookie;
