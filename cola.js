let personas = [
  {
    id: 1,
    first_name: "Gary",
    last_name: "Ortiz",
  },
  {
    id: 2,
    first_name: "Albert",
    last_name: "Williamson",
  },
  {
    id: 3,
    first_name: "Mildred",
    last_name: "Fuller",
  },
  {
    id: 4,
    first_name: "Russell",
    last_name: "Robinson",
  },
  {
    id: 5,
    first_name: "Laura",
    last_name: "Harper",
  },
  {
    id: 6,
    first_name: "Larry",
    last_name: "Sanders",
  },
  {
    id: 7,
    first_name: "Michael",
    last_name: "Rice",
  },
  {
    id: 8,
    first_name: "Sara",
    last_name: "Harris",
  },
  {
    id: 9,
    first_name: "Phyllis",
    last_name: "Webb",
  },
  {
    id: 10,
    first_name: "Roger",
    last_name: "Alvarez",
  },
  {
    id: 11,
    first_name: "Maria",
    last_name: "Carpenter",
  },
  {
    id: 12,
    first_name: "Lori",
    last_name: "Edwards",
  },
  {
    id: 13,
    first_name: "Phillip",
    last_name: "Mitchell",
  },
  {
    id: 14,
    first_name: "Craig",
    last_name: "Lopez",
  },
  {
    id: 15,
    first_name: "Marie",
    last_name: "George",
  },
  {
    id: 16,
    first_name: "Jean",
    last_name: "Duncan",
  },
  {
    id: 17,
    first_name: "Kimberly",
    last_name: "Butler",
  },
  {
    id: 18,
    first_name: "Heather",
    last_name: "Ramirez",
  },
  {
    id: 19,
    first_name: "Jason",
    last_name: "Sanders",
  },
  {
    id: 20,
    first_name: "Juan",
    last_name: "Evans",
  },
  {
    id: 21,
    first_name: "Billy",
    last_name: "Tucker",
  },
  {
    id: 22,
    first_name: "Fred",
    last_name: "Duncan",
  },
  {
    id: 23,
    first_name: "Daniel",
    last_name: "Peterson",
  },
  {
    id: 24,
    first_name: "Kelly",
    last_name: "Gilbert",
  },
  {
    id: 25,
    first_name: "Aaron",
    last_name: "Hart",
  },
  {
    id: 26,
    first_name: "Phillip",
    last_name: "Cook",
  },
  {
    id: 27,
    first_name: "Sara",
    last_name: "Perry",
  },
  {
    id: 28,
    first_name: "Karen",
    last_name: "Fields",
  },
  {
    id: 29,
    first_name: "Nancy",
    last_name: "Schmidt",
  },
  {
    id: 30,
    first_name: "Theresa",
    last_name: "Chavez",
  },
  {
    id: 31,
    first_name: "Howard",
    last_name: "Crawford",
  },
  {
    id: 32,
    first_name: "Catherine",
    last_name: "Johnson",
  },
  {
    id: 33,
    first_name: "Nicholas",
    last_name: "Morales",
  },
  {
    id: 34,
    first_name: "Chris",
    last_name: "Morales",
  },
  {
    id: 35,
    first_name: "Mildred",
    last_name: "Frazier",
  },
  {
    id: 36,
    first_name: "Mark",
    last_name: "Harper",
  },
  {
    id: 37,
    first_name: "Michael",
    last_name: "Ryan",
  },
  {
    id: 38,
    first_name: "Matthew",
    last_name: "Ruiz",
  },
  {
    id: 39,
    first_name: "Jose",
    last_name: "Morales",
  },
  {
    id: 40,
    first_name: "Scott",
    last_name: "Simpson",
  },
  {
    id: 41,
    first_name: "Pamela",
    last_name: "Welch",
  },
  {
    id: 42,
    first_name: "Ruth",
    last_name: "Mcdonald",
  },
  {
    id: 43,
    first_name: "Kevin",
    last_name: "Fields",
  },
  {
    id: 44,
    first_name: "Justin",
    last_name: "Kim",
  },
  {
    id: 45,
    first_name: "Wanda",
    last_name: "Jones",
  },
  {
    id: 46,
    first_name: "Rolando",
    last_name: "Garcia",
  },
  {
    id: 47,
    first_name: "Joe",
    last_name: "Gonzales",
  },
  {
    id: 48,
    first_name: "Martin",
    last_name: "Thompson",
  },
  {
    id: 49,
    first_name: "Phillip",
    last_name: "Hayes",
  },
  {
    id: 50,
    first_name: "Angela",
    last_name: "Shaw",
  },
  {
    id: 51,
    first_name: "Jimmy",
    last_name: "Garza",
  },
  {
    id: 52,
    first_name: "Doris",
    last_name: "Cook",
  },
  {
    id: 53,
    first_name: "Nancy",
    last_name: "Thompson",
  },
  {
    id: 54,
    first_name: "Sarah",
    last_name: "Stanley",
  },
];

class Cola {
  constructor() {
    this.usuarios = [];
    this.atendidos = [];
  }

  meter(dato) {
    this.usuarios.push(dato);
  }

  atender(dato) {
    this.atendidos.push(dato);
  }

  sacar() {
    return this.usuarios.shift();
  }

  frente() {
    this.usuarios[0];
  }

  getTamano() {
    return this.usuarios.length;
  }

  esVacia() {
    return this.getTamano() === 0;
  }

  mostrar() {
    this.usuarios.forEach((dato) => {
      console.log(dato);
    });
  }

  mostrarAtendidos() {
    this.atendidos.forEach((atendido) => {
      console.log(atendido);
    });
  }
}

let cola = new Cola();
let usuariosSinAtender = document.getElementById("sinAtender");
document.addEventListener("DOMContentLoaded", function (event) {
  usuariosSinAtender.style.display = "none";
});
iniciarFila();
atenderFila();

//genera un numero aleatoriamente y se asigna como indice a un
//objeto del array
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function asignarUsuario() {
  let usuariosTabla = [];
  let user = getRandomNumber(1, 54);
  let persona = personas[user];
  cola.meter(persona.first_name + " " + persona.last_name);
  usuariosTabla.push(persona.first_name + " " + persona.last_name);
  tablaUsuariosFila(usuariosTabla);
}

//usuarios que llegaron a la fila
function tablaUsuariosFila(usuarios) {
  const cuerpoTabla = document.querySelector("#usuariosFila");
  usuarios.forEach((user) => {
    // se crea el tr
    const tr = document.createElement("tr");

    // se crea el  <td> del primer campo (nombreUser) y se agrega al tr
    let nombreUser = document.createElement("td");
    nombreUser.innerHTML =
      user + "  " + '<i class="fas fa-money-bill-wave"></i>';
    tr.appendChild(nombreUser);

    // se agrega el <tr> al cuerpo de la tabla
    cuerpoTabla.appendChild(tr);
  });
}

//Funcion que se ejecuta por dos minutos para recibir a los clientes
// 60 el valor cuando se detiene == 60 * 2000 = 120_000 == 2min
function iniciarFila() {
  tiempo = 0;
  x = setInterval(function () {
    if (tiempo == 60) {
      clearInterval(x);
      usuariosSinAtender.style.display = "block";
      mostrarUsuariosSinAtender();
    }
    asignarUsuario();
    tiempo++;
  }, 2000);
}

// los usuarios que llegan son atendidos en 4s
// y son pasados al array de atendidos

function atenderFila() {
  atendido = 0;
  z = setInterval(function () {
    if (atendido == 30) {
      clearInterval(z);
    } else {
      let userAtendido = cola.sacar();
      let atendidos = [];
      atendidos.push(userAtendido);
      cola.atender(userAtendido);
      tablaUsuariosAtendidos(atendidos);
    }
    atendido++;
  }, 4000);
}

function mostrarUsuariosSinAtender() {
  let usuariosSinAtender = cola.usuarios;
  tablaUsuariosSinAtender(usuariosSinAtender);
}

function tablaUsuariosAtendidos(usuarios) {
  const cuerpoTabla = document.querySelector("#usuariosAtendidos");
  usuarios.forEach((user) => {
    // se crea el tr
    const tr = document.createElement("tr");

    // se crea el  <td> del primer campo (nombreUser) y se agrega al tr
    let nombreUser = document.createElement("td");
    nombreUser.innerHTML = user + " " + '<i class="fas fa-check"></i>';
    tr.appendChild(nombreUser);

    // se agrega el <tr> al cuerpo de la tabla
    cuerpoTabla.appendChild(tr);
  });
}

function tablaUsuariosSinAtender(usuarios) {
  const cuerpoTabla = document.querySelector("#usuariosSinAtender");
  usuarios.forEach((user) => {
    // se crea el tr
    const tr = document.createElement("tr");

    // se crea el  <td> del primer campo (nombreUser) y se agrega al tr
    let nombreUser = document.createElement("td");
    nombreUser.innerHTML = '<i class="far fa-frown"></i>' + "  " + user;
    tr.appendChild(nombreUser);

    // se agrega el <tr> al cuerpo de la tabla
    cuerpoTabla.appendChild(tr);
  });
}
