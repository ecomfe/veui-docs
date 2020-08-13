const express = require('express')
const nuxt = require('nuxt')
const { Nuxt, Builder } = nuxt

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080

// uncaughtException 避免程序崩溃
process.on('uncaughtException', function (err) {
  console.error(err)
  try {
    let killTimer = setTimeout(function () {
      process.exit(1)
    }, 10000)
    killTimer.unref()
    server.close()
  } catch (e) {
    console.error('Fail to close server safely. ', e.stack)
  }
})

app.set('port', port)

// Import and Set Nuxt.js options
const config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const server = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(server)
  builder.build()
}

// Give nuxt middleware to express
app.use(server.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
