// window.onload();

let quote = "";
// document.querySelector("#quote").innerHTML= quote;


let key = "fa09959d7acc43eb933b3aa8f2226770f8274f12";

function get_quote_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
         // Access the result here
         alert(this.responseText);
     }
    };
    xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_quote_of_the_day();

// function getQuote() {
//     return fetch(`https://zenquotes.io/api/today/${key}`)
//       .then(res => {
//         return res.json()
//       })
//       .then(data => {
//         return data[0]["q"] + " -" + data[0]["a"]
//       })
//   }


//   getQuote();
// const api_url ="https://quotes.rest/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);

// fetch(`https://zenquotes.io/api/today/${key}`)
//     .then(res=>res.json())
//     .then(data =>console.log(data + "cheese")
//     );

//     console.log("bread");