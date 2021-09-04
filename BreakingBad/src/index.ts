import "reflect-metadata";
import { initConnection } from "./database";
import { getQuotesFromApi } from "./getQuotes/getQuotes";

async function testSaveQuote() {
    await initConnection();
    
    const getQuotes = new getQuotesFromApi();

    await getQuotes.saveQuotes();
}

testSaveQuote();
