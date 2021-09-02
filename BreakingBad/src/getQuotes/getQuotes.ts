import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
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
}
