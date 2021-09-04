import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getConnection } from "typeorm";
import { Quotes } from "../database/entities/quotes.entity";
import { Iquote } from "./interface/interface.quote";

export class getQuotesFromApi{
    private axiosConfiguration: AxiosRequestConfig = {
        method:"GET",
        url: "https://breakingbadapi.com/api/quotes",
    };

    public async requestData(): Promise<Iquote[]> {
        let response: AxiosResponse = await axios(this.axiosConfiguration);
        console.log(response.data);
        return [];
    }

    public async saveQuotes() {
        try {  
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Quotes)
                .values([
                    {
                        quote: 'La vida es dura, pero es mas dura la verdura',
                        author: 'JC',
                        series: 'Codellege'
                    },
                ])
                .execute();
        } catch (error) {
            console.log("error");
        }
    }
}
