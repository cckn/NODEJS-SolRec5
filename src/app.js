import { init as dbInit } from './data/db'
import config from './config'

import * as test from './data/6-test'
import * as dataReducer from './data/reducer'

const dataRequest = []

const main = () => {
  dbInit()

  dataRequest.push(test)

  // for (let hours = 0; hours < 24; hours++) {
  //   for (let min = 0; min < 60; min = min + 5) {
  //     dataRequest.forEach(({ tableInfo, dataActions }) => {
  //       dataActions.forEach(({ name, action }) => {
  //         dataReducer.reducer(tableInfo.tableName, name, action(hours, min))
  //       })
  //     })
  //     console.log(
  //       `${hours} : ${min} ${JSON.stringify(dataReducer.getDataObject())}`,
  //     )
  //   }
  //   console.log(hours)
  // }
  dataUpdate()

  setInterval(() => {
    dataUpdate()
  }, config.sensingInterval)
}

const dataUpdate = () => {
  const hours = new Date().getHours()
  const min = new Date().getMinutes()
  dataRequest.forEach(({ tableInfo, dataActions }) => {
    dataActions.forEach(({ name, action }) => {
      dataReducer.reducer(tableInfo.tableName, name, action(hours, min))
    })
  })
  dataReducer.insertDb()
  console.log(
    `${hours} : ${min} ${JSON.stringify(dataReducer.getDataObject())}`,
  )
}

main()
