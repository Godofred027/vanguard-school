/* Requires */
const express = require('express')
const path = require('path');
const morgan = require('morgan')

/* Server */
const app = express()

/* Settings */
app.set('port', 3000)

/* Middleware */
app.use(morgan('combined'))

/* Routes */
app.use(require('./routes/'))

/* Static Files */
app.use(express.static(path.join(__dirname, './public')))

/* Open Server */
app.listen(app.get('port'), () => {
    console.log('Server listen to port', app.get('port'));
})