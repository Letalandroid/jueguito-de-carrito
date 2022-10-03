class Carrito {
  constructor(carro, rueda1, rueda2, gradosDeRodaje, distancia) {
    this.carro = carro;
    this.rueda1 = rueda1;
    this.rueda2 = rueda2;
    this.gradosDeRodaje = gradosDeRodaje;
    this.distancia = distancia;
  }

  rodar(gradosDeRodaje, distancia) {
    carro.style.left = `${distancia}px`;
    rueda1.style.transform = `rotate(${gradosDeRodaje}deg)`;
    rueda2.style.transform = `rotate(${gradosDeRodaje}deg)`;
  }
}

const carro = document.getElementById("carrito");
const rueda1 = document.getElementById("rueda1");
const rueda2 = document.getElementById("rueda2");
const marchaAtras = new Audio("./audio/marchaAtras.mp3");
const motor = new Audio("./audio/motor.mp3");
const motorArranque = new Audio("./audio/motorArrancando.mp3");
const empezarJuego = document.getElementById("play");
let gradosDeRodaje = 0;
let distancia = 25;

let carrito = new Carrito(carro, rueda1, rueda2, gradosDeRodaje, distancia);

empezarJuego.addEventListener("click", () => {
  if (empezarJuego.checked) {
    document.getElementById("panel").style.animationName = "ocultarPanel";
  }
});

document.addEventListener("keypress", (e) => {
  if (empezarJuego.checked) {
    jugar(e);
  }
});

const jugar = (e) => {
  if (e.key === "d") {
    carrito.rodar(gradosDeRodaje, distancia);
    gradosDeRodaje += 10;
    distancia += 10;
    marchaAtras.pause();
    motorArranque.play();

    motorArranque.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        motor.play();
      },
      false
    );

    motor.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        motor.play();
      },
      false
    );
  } else if (e.key === "a") {
    carrito.rodar(gradosDeRodaje, distancia);
    gradosDeRodaje -= 2;
    distancia -= 2;
    motorArranque.pause();
    marchaAtras.play();

    marchaAtras.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        marchaAtras.play();
      },
      false
    );
  }
};
