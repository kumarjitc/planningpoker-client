const BASE_URL = 'http://localhost:8000/';

export class HttpHelper {
    async makeGetRequest(endpoint) {
        let response = await fetch(`${BASE_URL}${endpoint}`);

        return response.json();
    }

    async makePutRequest(endpoint, path, data) {
        let params = Object.entries(path).map(entry => entry.join('/')).join('/');

        let response = await fetch(`${BASE_URL}${endpoint}/${params}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.text();
    }
}