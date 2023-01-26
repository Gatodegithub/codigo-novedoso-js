const { default: fetch } = require("node-fetch");

//De esta forma me evito tener que realizar operaciones de alto rendimiento si es que ya se realizo y tengo guardado el resultado de la operacion desde antes.
const memoization = (fn) => {

  //funciona como estado ya que devuelve un closure
  let results = {};

  return (arg) => {

    if(!results[arg]) {
      console.log(`Resultado ${arg} no guardado`);
      results[arg] = fn(arg);
    }

    return results[arg];

  }
}

// Esta funcion es PURA por que siempre regresa el mismo resultado si recibe el mismo parametro.
const mul2 = memoization((a)=> a * 2);

console.log(mul2(1));
console.log(mul2(2));


const request = memoization(async id => {

  console.log("Se ejecuto");

  let res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
  let json = await res.json();

  return json;

});

//La peticion se ejecuta solo una vez y la guarda, para la segunda vez que la llamo devuelve la respuesta gyardada y no realiza la peticion denuevo
request(1).then(r => console.log(r));
request(1).then(r => console.log(r));
