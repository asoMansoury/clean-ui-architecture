import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export class AxiosHttpClientAdapter{
    private readonly baseUrl;
    private readonly http:AxiosInstance=axios.create();

    constructor({baseUrl}:{baseUrl:string}){
        this.baseUrl = baseUrl;
        if(this.http==null){
            this.http = axios.create({
                baseURL:this.baseUrl
            });
            this.http.defaults.headers.post['Content-Type'] = 'application/json';
            // this.http.interceptors.response.use(
            //     async (response: AxiosResponse): Promise => {
            //       if (response.status >= 200 && response.status < 300) {
            //         return response.data;
            //       }
            //     },
            //     (error: AxiosError) => {
            //       const { response, request }: {
            //         response?: AxiosResponse;
            //         request?: XMLHttpRequest;
            //       } = error;
            //       if (response) {
            //         if (response.status >= 400 && response.status < 500) {
            //           //showAlert(response.data?.data?.message, 'error');
            //           return null;
            //         }
            //       } else if (request) {
            //         //showAlert('Request failed. Please try again.', 'error');
            //         return null;
            //       }
            //       return Promise.reject(error);
            //     }
            //   );
        }
    }
    

    async get<T>(url:string,params: {query:object}={query:{}}):Promise<T>{

        const query = Object.keys(params?.query || {})
                            .map((key)=> `${key}=${Object.getOwnPropertyDescriptor(params.query,key)?.value}`
                            )
                            .join("&");
        var result = (await this.http.get(this.baseUrl+url + "?"+query));
        return result.data as T;
    }

    async post<T>(url:string,data:T){
        var result = (await this.http.post(this.baseUrl+url,{
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        }));
        return result.data;
    }

    async patch<T>(url:string,data:T){
        return (await this.http.patch(this.baseUrl+url,
            {body:JSON.stringify(data)},
            {
                headers:{
                "Content-Type":"application/json",
            }
        })).data;
    }


    async delete<T>(url:string,data: T){
        
        return (await this.http.delete(this.baseUrl+url,{
            headers:{
                "Content-Type":"application/json",
            },
        })).data
    }

}