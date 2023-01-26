// * Closure una funcion que retorna otra funcion pero sin que se ejecute la funcion que se retorna, podemos tener elementos en la funcion padre la cual podra mantener su estado. Esto es posible por que js puede guardar funciones en variables.

const f = () => {

  let i = 0;

  return () => {
    console.log("Me he ejecutado " + i);
    i++;
  }
}

//Guardo en una variable la funcion que me retorna f
const f2 = f();
const f3 = f();
f2();
f2();
f3();
f2();