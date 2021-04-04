const express = require('express');

const app = express();
const port = (process.env.NODE_ENV === 'production') ? process.env.PORT : 5050;

app.get('/api/temperature', (req, res) => {

});

app.get('/api/temperature/:identifier', (req, res) => {
    
    const queriedCity = JSON.parse(req.params.identifier);

});

app.use(function (err, req, res, next) {
    if (res.status != 200) {
        res.send('Sorry something has broken :(.');
    }
});

app.listen(port, () => console.log(`Express server running on ${port}.`));