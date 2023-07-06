const key = "8094381b83230af3c4236d54e0f36553";

function screen(dados) {
  console.log(dados);
  document.querySelector("h2").innerHTML = "Tempo em " + dados.name;
  cidade = document.querySelector("input").value;
  {
    if (cidade === "") {
      document.querySelector("h2").innerHTML = "Cidade indefinida";
      document.querySelector(".temp").innerHTML = "";
      document.querySelector(".clima").innerHTML = "";
      document.querySelector(".umi").innerHTML = "";
      document.querySelector(".previsao").src = "";
    }
  }
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".clima").innerHTML = dados.weather[0].description;
  document.querySelector(".umi").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function city(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  screen(dados);
}

function buttonClick() {
  const cidade = document.querySelector("input").value;

  city(cidade);
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const btn = document.querySelector("button");
    btn.click();
  }
});
