"use strict";
/**
 * En js, los callback function eran usados para manejar las operaciones asincronas.
 * de cualquier forma los callbacks estaban limitados en terminos de funcionalidad, y aveces
 * el manejo de dichos callbacks era un infierno y de ahi proviene el termino callbackhell
 */
/**
 * La idea principipal detras de las promesas es que la promesa represente un evente de completado
 * o de error en una operacion asincrona
 */
/**
 * Promises States
 * 1- Pending -> El estado inicial de las promesas que nos indica que la promesa no se ha completado aun.
 * 2- Fulfilled -> Este estado indica que la promesa ha sido exitosa.
 * 3- Rejected -> Este estado indica que hubo un error en la promesa.
 */
/**
 * Cuando se ejecuta el resolve en la promesa, en la instancia de dicha promesa se ejecuta el then
 */
const promise1 = new Promise((resolve, rejected) => {
    let task_done = true;
    if (task_done) {
        resolve("2");
    }
    else {
        rejected("Task invalid");
    }
});
console.log("1"); //<- Codigo Sincrono: hasta que termine su tarea ejectura la siguiente linea
promise1 //<- Codigo Asincrono: entre a event loop queue
    .then(result => {
    console.log(result);
})
    .catch(error => {
    console.log(error);
});
console.log("3");
/**
 * Las promesas son una forma de encadenar operaciones asincronas con un codigo mas limpio.
 */
//# sourceMappingURL=Ejemplo1.js.map