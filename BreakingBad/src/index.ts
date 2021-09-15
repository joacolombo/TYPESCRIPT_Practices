import "reflect-metadata";
import { initConnection } from "./database";
import { getQuotesFromApi } from "./getQuotes/getQuotes";

const init = async () => {
    await initConnection(); 
    executeGetQuotes();
};
//Iniciar la base de datos



const executeGetQuotes=() => {
    //Instanciamos la clase "getQuotesFromApi" y se guarda la instancia en getQuotes
    const getQuotes = new getQuotesFromApi();

    //getQuotes.requestData();

    getQuotes.GetQuotesByAuthor("Walter White");
};



init();