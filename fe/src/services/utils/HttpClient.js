import delay from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path) {
    await delay(500); // Tempo do Loader (teste)

    const response = await fetch(`${this.baseUrl}${path}`);

    // response.status >= 200 && response.status <= 299
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  }
}

export default HttpClient;
