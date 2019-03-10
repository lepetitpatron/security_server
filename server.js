const express = require('express');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const app = express();
const port = 5000;

var jwtCheck = jwt({
    secret: 'OGD30o4u24INhy8bkUmepXP1iL0eGA61',
    audience: 'developers',
    issuer: 'https://menounyhamza.eu.auth0.com/'
});

//Private endpoint
app.get('/api/developers', jwtCheck, jwtAuthz(['apname.read']), (req, res) => {
    const developers = [
        {id: 1, firstName: 'Hamza', lastName: 'Menouny'},
        {id: 2, firstName: 'Younes', lastName: 'Hlalem'}
    ]

    res.json(developers);
});

app.listen(port, () => console.log('Server started on port ' + port));
