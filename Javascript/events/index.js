const { EventEmitter } = require('events')
const birthdayEventLister = (name) => {
  console.log(`Selamat ulang tahun ${name}!`)
}

const myEmitter = new EventEmitter()
myEmitter.on('birthday', birthdayEventLister)
myEmitter.emit('birthday', 'Neno')
