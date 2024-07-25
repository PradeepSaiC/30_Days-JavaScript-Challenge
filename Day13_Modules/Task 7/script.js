// Task 7 : Install a third-party module (eg.axios) using npm,Import and 
// use this module to make a network request in a script . 
const axios = require('axios');

async function makeRequest() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Response Data:', response.data);
  } catch (error) {
    console.error('Error making request:', error);
  }
}
makeRequest();
