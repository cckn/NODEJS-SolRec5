import { init as dbInit } from './data/db'
import config from './config'

import * as bms from './data/models/1-bms'
import * as pv from './data/models/2-pv'
import * as pcs from './data/models/3-pcs'
import * as ess from './data/models/4-ess'
import * as plc from './data/models/5-plc'

import * as dataReducer from './data/reducer'
import { bind } from './data/modbusServer'

const dataModels = []

const main = () => {
  dbInit()

  dataModels.push(bms)
  dataModels.push(pv)
  dataModels.push(pcs)
  dataModels.push(ess)
  dataModels.push(plc)
  // dataModels.push(test)

  console.log(dataModels)

  dataReducer.initData(dataModels)

  dataUpdate()

  setInterval(() => {
    dataUpdate()
    bind()
  }, config.updateInterval)

  setInterval(() => {
    dataReducer.insertDb()
  }, config.insertInterval)
}

const dataUpdate = () => {
  // const hours = new Date().getHours()
  const hours = 12
  const min = new Date().getMinutes()
  dataModels.forEach(({ tableInfo, dataActions }) => {
    console.log(tableInfo.tableName)

    dataActions.forEach(({ name, action }) => {
      dataReducer.reducer(tableInfo.tableName, name, action(hours, min))
    })
  })
  console.log(dataReducer.getDataObject())
}

main()
