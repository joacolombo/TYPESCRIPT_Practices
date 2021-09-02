import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

let axiosConfiguracion: AxiosRequestConfig = {
    method:"GET",
    url: "https://breakingbadapi.com/api/quotes",
};

axios(axiosConfiguracion)
.then((QuotesList: AxiosResponse) => {
    console.log(QuotesList.data);
})
.catch((error) => {
    console.log("Hubo un error en getAllQuotes");
});
