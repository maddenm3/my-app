require('dotenv').config()
const path = require("path")
const express = require("express");
const app = express()
const cors = require('cors')
const querystring = require('querystring')
const axios = require('axios')

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())




const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = "https://starfish-app-fyqbg.ondigitalocean.app/callback"
const URL = process.env.URL || "https://starfish-app-fyqbg.ondigitalocean.app"
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static('client/public'))

app.use('/login', (req, res) => {
  const scope = 'user-read-private user-top-read user-read-currently-playing user-read-email';

  const queryParams = querystring.stringify({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    scope: scope,
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

// app.get('/callback', (req, res) => {
//   res.send('Callback')
// })

app.get('/callback', (req, res) => {
  const code = req.query.code || null;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;

        const queryParams = querystring.stringify({
          access_token,
          refresh_token,
          expires_in,
        });
        res.redirect(`${URL}/?${queryParams}`);

      } else {
        res.redirect(`/?${querystring.stringify({ error: 'invalid_token' })}`);
      }
    })
    .catch(error => {
      res.send(error);
    });
});

app.get('/refresh_token', (req, res) => {
  const { refresh_token } = req.query;

  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
    },
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
});


// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//  });

// app.get('/login', (req, res) => {
//   const queryParams = querystring.stringify({
//     client_id: CLIENT_ID,
//     response_type: 'code',
//     redirect_uri: REDIRECT_URI,
//   })
//   res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
// });

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)


app.use((req, res, next) => {
  res.sendFile('client/build/index.html', {root: __dirname})
})


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


