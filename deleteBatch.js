require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.APPLITOOLS_API_KEY;
const apiUrl = process.env.APPLITOOLS_SERVER_URL;
const batchId = '00000251673652434117';

async function deleteBatch() {
    try {
        const response = await axios.delete(`${apiUrl}api/sessions/batches/${batchId}`, {
            headers: {
                'X-Eyes-Api-Key': apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        });
    } catch (error) {
        if (error.response) {
            console.error(`Error ${error.response.status}:`, error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    }
}

deleteBatch();