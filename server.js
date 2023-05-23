const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS------
app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
})
// ------
var accountRouter = require('./routers/account')
var songsRouter = require('./routers/songs')
var MvsRouter = require('./routers/mv')
var SingersRouter = require('./routers/singers')
var AlbumsRouter = require('./routers/albums')
var PlaylistsRouter = require('./routers/playlists')
var TypesRouter = require('./routers/types')
var RankRouter = require('./routers/ranks')
var ImageRouter = require('./routers/image')
app.use('/api/account/',accountRouter)
app.use('/api/songs/', songsRouter)
app.use('/api/mv/', MvsRouter)
app.use('/api/singer/', SingersRouter)
app.use('/api/album', AlbumsRouter)
app.use('/api/Playlist', PlaylistsRouter)
app.use('/api/type', TypesRouter)
app.use('/api/rank', RankRouter)
app.use('/api/image', ImageRouter)





app.get('/user', (req, res, next) => {

})


app.get('/', (req, res) => {
    res.send('Hello World! pink new')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})