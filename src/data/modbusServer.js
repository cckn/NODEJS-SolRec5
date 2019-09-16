import net from 'net'
import modbus from 'jsmodbus'

import { dataObject } from './reducer'

const netServer = new net.Server()
const holding = Buffer.alloc(10000)
const server = new modbus.server.TCP(netServer, {
  holding: holding,
})

server.on('connection', function(client) {
  console.log('New Connection')
})

server.on('readCoils', function(request, response, send) {
  /* Implement your own */

  response.body.coils[0] = true
  response.body.coils[1] = false

  send(response)
})

server.on('readHoldingRegisters', function(request, response, send) {
  /* Implement your own */
  console.log('readHoldingRegisters')

  send(response)
})

server.on('preWriteSingleRegister', function(value, address) {
  console.log('Write Single Register')
  console.log(value.body)
  const {
    body: { address: add, value: val },
  } = value
  console.log(add, val)
})

server.on('WriteSingleRegister', function(value, address) {
  console.log(
    'New {register, value}: {',
    address,
    ',',
    server.holding.readUInt16BE(address),
    '}',
  )
})

server.on('writeMultipleRegisters', function(value) {
  console.log('Write multiple registers - Existing: ', value)
})

const bind = () => {
  for (const key in dataObject) {
    const datas = dataObject[key]
    for (const key in datas) {
      const { modbusAddress, value } = datas[key]
      if (modbusAddress !== undefined) {
        if (value >= 0 && value <= 65535) {
          server.holding.writeUInt16BE(value, modbusAddress * 2)
        } else {
          server.holding.writeUInt16BE(0, modbusAddress * 2)
        }
      }
    }
  }
}
//   server.holding.writeUInt16BE(num++, 0)
//   server.holding.writeUInt16BE(num2, 2)
//   console.log(num2)
//   }, 1000)

console.log(`Port :: ${process.argv[2] || 8502}`)
netServer.listen(process.argv[2] || 8502)

export { bind }
