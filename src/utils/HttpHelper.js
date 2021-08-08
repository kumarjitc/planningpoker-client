const BASE_URL = 'http://localhost:8000/';

class Response {
    static #STATUS = 'status';
    static #DEFAULT_STATUS = 200;
    static #MESSAGE = 'message';

    #data;

    constructor() {
        this.#data = new Map();
    }

    addStatus(status) {
        this.#data.set(Response.#STATUS, status);

        return this;
    }

    addMessage(message) {
        this.#data.set(Response.#MESSAGE, message);

        return this;
    }

    get status() {
        return this.#data.has(Response.#STATUS) ? this.#data.get(Response.#STATUS) : Response.#DEFAULT_STATUS;
    }

    get data() {
        return {
            ...Object.fromEntries(this.#data)
        };
    }
}

export class HttpHelper {
    async makeGetRequest(endpoint) {
        let response = await fetch(`${BASE_URL}${endpoint}`);

        /**
         * Update This To Return Response
         */
        return response.json();
    }

    async makePostRequest(endpoint, data) {
        const response = await fetch(`${BASE_URL}${endpoint}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const body = await response.json();

        return new Response().addStatus(response.status).addMessage(body);
    }

    async makePutRequest(endpoint, path, data) {
        const params = Object.entries(path).map(entry => entry.join('/')).join('/');

        const response = await fetch(`${BASE_URL}${endpoint}/${params}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const body = await response.json();

        return new Response().addStatus(response.status).addMessage(body);
    }

    async makeDeleteRequest(endpoint, path) {
        let params = Object.entries(path).map(entry => entry.join('/')).join('/');

        let response = await fetch(`${BASE_URL}${endpoint}/${params}`, {
            method: 'DELETE'
        });

        return new Response().addStatus(response.status).addMessage(response.json());
    }
}

