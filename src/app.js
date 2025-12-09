import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function() {
  //write your code here
  
      const icons = ["♥", "♠", "♣", "♦"];
      const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      let randomIcon = icons[Math.floor(Math.random() * icons.length)];
      let colorIcon = randomIcon == "♥" ? "text-danger" : "text-dark";
      let randomNumero = numeros[Math.floor(Math.random() * numeros.length)];

  

  document.querySelector("body").innerHTML = `
  <div class="row vh-100 justify-content-center align-items-center">
      <div class="col-10 col-sm-8 col-md-6 col-lg-4 bg-white rounded position-relative shadow d-flex justify-content-center align-items-center" style="height: 600px; min-width: 300px; max-width: 400px;">
        
        <div class="display-1 position-absolute start-0 top-0 p-3 ${colorIcon}" style="font-size: 7rem;">
          ${randomIcon}
        </div>

        <div class="display-1 text-dark" style="font-size: 15rem;">
          ${randomNumero}
        </div>

        <div class="display-1 position-absolute end-0 bottom-0 p-3 ${colorIcon}" style="transform: rotate(180deg); font-size: 7rem;"> 
          ${randomIcon}
        </div>

      </div>
    </div>
  `;
};
