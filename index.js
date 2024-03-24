const axios = require('axios')

axios({
    url: `https://my.website.com/endpoint`,
    data: { key: 'value' },
    headers: {
        'accept': '*',
        'content-type': 'application/json'
    },
    responseType: 'stream',
    method: 'POST',
    onDownloadProgress: progressEvent => { /** Shows the progress of stream */ }
}).then(response => {
    response.data.on('data', (chunk) => console.log(chunk.toString()))          // event on data received: byteArray converted to String
    response.data.on('end', () => console.log(`request finish`))                // event on conection is close
}).catch(error => { console.log('error => ', error) })                          // event error request