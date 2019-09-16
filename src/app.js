import { init as dbInit } from './data/db'
import config from './config'

import * as plc from './data/models/5-plc'
import * as test from './data/models/6-test'
import * as dataReducer from './data/reducer'

const dataRequest = []

const main = () => {
  dbInit()

  dataRequest.push(plc)
  dataRequest.push(test)
  dataReducer.initData(dataRequest)

  dataUpdate()

  setInterval(() => {
    dataUpdate()
  }, config.updateInterval)

  setInterval(() => {
    dataReducer.insertDb()
  }, config.insertInterval)
}

const dataUpdate = () => {
  const hours = new Date().getHours()
  const min = new Date().getMinutes()
  dataRequest.forEach(({ tableInfo, dataActions }) => {
    console.log(tableInfo.tableName)

    dataActions.forEach(({ name, action }) => {
      dataReducer.reducer(tableInfo.tableName, name, action(hours, min))
    })
  })
  console.log(
    `${hours} : ${min} ${JSON.stringify(dataReducer.getDataObject())}`,
  )
}

main()
