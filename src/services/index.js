import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'YOUR_API_BASE_URL', // Replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

class ApiDataService {
  async get(endpoint, config = {}) {
    try {
      const response = await apiClient.get(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(endpoint, data = {}, config = {}) {
    try {
      const response = await apiClient.post(endpoint, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put(endpoint, data = {}, config = {}) {
        try {
            const response = await apiClient.put(endpoint, data, config);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

  async delete(endpoint, config = {}) {
    try {
      const response = await apiClient.delete(endpoint, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    let message = 'An unexpected error occurred';

    if (error.response) {
      message = `API error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`;
    } else if (error.request) {
      message = 'Network error: Could not connect to the server';
    } else {
      message = `Error: ${error.message}`;
    }

    console.error(message, error);
    return new Error(message);
  }
}

export default new ApiDataService();