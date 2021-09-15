import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getConnection } from "typeorm";
import { Quotes } from "../database/entities/quotes.entity";
import { Iquote } from "./interface/interface.quote";

export class getQuotesFromApi{
    private axiosConfiguration: AxiosRequestConfig = {
        method:"GET",
        url: "https://breakingbadapi.com/api/quotes",
    };

    public async requestData(): Promise<void> {
        let listaQuotes: Iquote[] = [];
        
        let responseAxios: AxiosResponse<Iquote[]> = await axios(this.axiosConfiguration);

        listaQuotes  = responseAxios.data.map(quote => ({
            author:  quote.author,
            quote: quote.quote,
            series: quote.series
        }));


        //this.saveQuotes(listaQuotes); //Para guardar la lista en la tabla
    }

    private async saveQuotes(listaQuotes: Iquote[]) {
        try {  
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Quotes)
                .values(listaQuotes)
                .execute();
        } catch (error) {
            console.log("error");
        }
    }

    public async GetQuotesByAuthor(author: string) {
        try {
            let quoteByAuthor = await getConnection()
            .getRepository(Quotes)
            .createQueryBuilder("quotes")
            .where("quotes.author = :author", {author: author})
            .execute();

            console.log(quoteByAuthor);
        } catch (error) {
            console.log(`Error en GetQuotesByAuthor ${error}`)
        }
    }
}
