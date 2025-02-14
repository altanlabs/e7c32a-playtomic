import axios from 'axios';

const API_BASE_URL = "https://api.altan.ai/platform/database";

export const makeApiCall = async ({
  method,
  url,
  body,
  headers = {}
}: {
  method: string;
  url: string;
  body?: any;
  headers?: Record<string, string>;
}) => {
  try {
    const response = await axios({
      method,
      url,
      data: body,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};