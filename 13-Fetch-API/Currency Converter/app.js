const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("DOMContentLoaded", () => {
  // Fill dropdowns
  for (let select of dropdowns) {
    for (let currCode in countryList) {
      let option = document.createElement("option");
      option.innerText = currCode;
      option.value = currCode;

      if (select.name === "from" && currCode === "USD") {
        option.selected = true;
      } else if (select.name === "to" && currCode === "BDT") {
        option.selected = true;
      }

      select.append(option);
    }

    select.addEventListener("change", updateFlag);
  }

  btn.addEventListener("click", updateExchangeRate);

  updateExchangeRate();
});

const updateExchangeRate = async () => {
  let input = document.querySelector(".amount input");
  let amount = Number(input.value);

  if (!amount || amount < 1) {
    amount = 1;
    input.value = 1;
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  const URL = `${BASE_URL}/${from}.json`;

  try {
    let res = await fetch(URL);

    if (!res.ok) throw new Error("API error");

    let data = await res.json();

    let rate = data[from][to];

    if (!rate) throw new Error("Invalid currency pair");

    let result = amount * rate;

    msg.innerText = `${amount} ${fromCurr.value} = ${result.toFixed(
      2
    )} ${toCurr.value}`;
  } catch (error) {
    console.log(error);
    msg.innerText = "Error fetching exchange rate ❌";
  }
};

const updateFlag = (e) => {
  let curr = e.target.value;
  let code = countryList[curr];

  let img = e.target.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${code}/flat/64.png`;
};