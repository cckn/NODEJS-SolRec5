import * as db from './db'
import config from './config'

import * as test from './data/6-test'
import * as dataReducer from './data/reducer'

const dataRequest = []

const main = () => {
  db.init()

  dataRequest.push(test)

  for (let hours = 0; hours < 24; hours++) {
    for (let min = 0; min < 60; min = min + 5) {
      dataRequest.forEach(({ tableInfo, dataActions }) => {
        dataActions.forEach(({ name, action }) => {
          dataReducer.reducer(name, action(hours, min))
        })
      })
      console.log(
        `${hours} : ${min} ${JSON.stringify(dataReducer.getDataObject())}`,
      )
    }
    console.log(hours)
  }
  // setInterval(() => {
  //   datas.forEach(({ data, tableInfo, getDataSpecByHours }, idx, array) => {
  //     // const result = generator.dataGenerator(
  //     //   getDataSpecByHours(new Date().getHours()),
  //     //   data,
  //     // )
  //     console.log(getDataSpecByHours(1))
  //     // db.insert(result, tableInfo)
  //     // array[idx] = { ...array[idx], data }
  //     // console.table(result)
  //   })
  // }, config.sensingInterval)
}

main()
