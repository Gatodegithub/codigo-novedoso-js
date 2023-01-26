const pepe = (a, b) => a / b;

const casos = {
  "*": pepe,
  _: (a, b) => a / b,
  "+": (a, b) => a / b,
};

console.log(casos["*"](15, 5));

//Desestructuración con de array desde un indice!
const frutas = ["Manzana", "Pera", "Guinda", "Frutilla"];

const { 2: guinda } = frutas;

console.log(guinda);

const dynamicProperty = "occupation";
const person = {
  name: "Gulp",
  [dynamicProperty]: "Vendedor",
};
console.log(person.occupation + "\n");

const nombres = ["Leandro", "Saavedra"];
const persona = { nombre: "Felipe", apellido: "Perez" };
for (const nombre of nombres) {
  console.log(nombre);
}

for (const nombre in persona) {
  console.log(persona[nombre]);
}

console.log("nombre" in persona);
console.log("colegio" in persona);

Object.keys(persona).forEach((key) => {
  let valor = persona[key];
  console.log({ key, valor });
});

const viejos = [
  {
    nombre: "zeus",
    edad: 50,
  },
  {
    nombre: "sepa",
    edad: 60,
  },
  {
    nombre: "poto",
    edad: 15,
  },
  {
    nombre: "pitas",
    edad: 35,
  },
  {
    nombre: "uzeless",
    edad: 10,
  },
];

let masViejos = viejos.filter((el) => el.edad > 30).map((el) => el.nombre);
console.log(masViejos);


//* Recorrer object con Object.entries
let yo = {
  nombre: "Aldo",
  apellido: "Saavedra",
  altura: 1.82,
  edad: 25
}

const arrConPropiedades = Object.entries(yo);
console.log(Object.entries(yo))

arrConPropiedades.forEach(([key, val]) => {
  yo[key] = val.toString().toUpperCase();
})

console.log(yo);


//* Copiar por referencia o valor
let mascota = {
  tipo: "perro",
  edad: 10,
  compañera: {
    nombre: "avellana",
    tipo: "gata"
  }
}

let copiaMascota = mascota;

copiaMascota.compañera.nombre = "avellana tostada";

console.log(mascota) //! se copio por referencia

copiaMascota = {...mascota}; //! solo copio por valor el primer nivel del objeto, los otros objetos dentro de este siguen copiados por referencia

copiaMascota.compañera.nombre = "avellanita";

console.log(mascota); //! como es un objeto en segundo nivel se copia por referencia

//*Para solucionar este problema
console.log(mascota);
let { compañera } = mascota;
copiaMascota = {...mascota}
copiaMascota.compañera = {...compañera};
copiaMascota.compañera.nombre = "linda";

console.log(mascota);
console.log(copiaMascota)



//* Bind, call, Apply - tienen el mismo resultado pero cambia la forma de llamarse
const libro = {
  title: "Aprendiendo js",
  author: "Aldo",
  year: 2024,
  comment: function(name) { // * El this NO hace referencia a este objeto si pusiera una arrow function en el objecto.
    return `${name} compró el libro ${this.title}`
  }
}

//PROBLEMA, llega undefined - funcion clousure
const libroComment = libro.comment;
console.log(libroComment('Elon Musk'));

//Soluciones
const libroCommentBind = libro.comment.bind(libro);
console.log(libroCommentBind('Elon Musk'));

console.log(libro.comment.call(libro, 'Elon Musk'));

console.log(libro.comment.apply(libro, ['Elon Musk']));


//* Ordenar array objeto
const users = [
  {id:12, name:'Dary'},
  {id:13, name:'Cohn'},
  {id:14, name:'Bob'},
  {id:15, name:'Alice'}
]

users.sort((a,b) => {
  return b.id - a.id;
})

console.log(users)


//* CHECK THE FALSY OR TRULY VALUE
let falsy = 0;
console.log(falsy === 0 ? 0 : !!falsy, !!0, !!"", !!null, !!"hi", !!undefined, !!NaN)

//* function calls
function f1() {
  console.log("hi")
}

function f2() {
  console.log("world")
}

(true ? f1 : f2)();