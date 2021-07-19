const BASE_URL = 'http://localhost:8000/';

export class HttpHelper {
    async makeGetRequest(endpoint) {
        let response = await fetch(`${BASE_URL}${endpoint}`);

        return response.json();
    }
}