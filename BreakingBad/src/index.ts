import { getQuotesFromApi } from "./getQuotes/getQuotes";

const getQuoteInstance = new getQuotesFromApi();

getQuoteInstance.requestData();