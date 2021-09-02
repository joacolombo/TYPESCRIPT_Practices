/**
 * Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. En el siguiente ejemplo, la función foo recibe por parámetro otra función, que es el callback. La función foo es la encargada de ejecutar el callback
 */

let numberLists: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function foo(callback: Function) {
    callback();
}

function foo2(callback: Function) {
    console.log(2 + 2);
    callback();
}

foo2(function(){
    console.log("Termino codigo");
})

function porcada(numberLists2:any[], callback:Function) {
 for(let index=0; index<numberLists2.length; index++) {
    const element = numberLists2[index];
    callback(element, index);
 }
}

// porcada(numberLists, (element: number, index: number) => {
//     console.log(`${index + 1} -> ${element * 2}`);
// });

// numberLists.filter((value, index) => value > 3);

function filtro(numberList:any[], callback: Function) {
    let filterList: any[] = [];
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        if (callback(element, index) == true) {
            filterList.push(element);
        }
    }
    
    return filterList;
}

let filtroNuevo = filtro(numberLists, (element: any, index: any) => {
    return element > 3;
})

console.log(filtroNuevo);

function map() {

}

let x = numberLists.map((value: any, index: any)  => value * 2);

function mapa2(numberList:any[], callback: Function){
    let newList=[];  
    for (let index = 0; index < numberList.length; index++) {
        const element = numberList[index];
        newList.push(callback(element, index));
    }
    return newList;
}

let y = mapa2(numberLists, (valor: any, index: any) =>{
    return `numeros ${index}`;
});

console.log(y);