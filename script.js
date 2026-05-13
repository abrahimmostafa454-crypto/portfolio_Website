const text = "Software Engineer | Embedded Systems | AI Enthusiast";

let i = 0;

function type() {

  if (i < text.length) {

    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(type, 50);

  }

}

type();

const btn = document.getElementById("modeBtn");

btn.addEventListener("click", function () {

  document.body.classList.toggle("dark");

  document.body.classList.toggle("light");

  if (document.body.classList.contains("dark")) {

    btn.innerText = "Light Mode";

  }

  else {

    btn.innerText = "Dark Mode";

  }

});