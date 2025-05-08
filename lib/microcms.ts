import {createClient} from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: 'jest-learning',
  apiKey: 'qxqBmVzdeQsHRtE8Obg1QbNi0VaA5NmadT3U',
});

export const fetchData = async (endpoint: string) => {
  try {
    const data = await client.get({endpoint});
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
