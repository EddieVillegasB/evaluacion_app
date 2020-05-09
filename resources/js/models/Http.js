import axios from 'axios'

class Http {

    constructor(url){
        this.url = url
    }

    fetch({method = 'get', payload = {}}){
        try {
            const {data} = axios[method](this.url,payload)
            return data   
        } catch (error) {
            return error
        }
    }

    static create(url){
        return new Http(url)
    }

}

export default Http