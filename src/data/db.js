import db from '../mysql'
import config from '../config'

import { queryGenerator } from './queryGenerator'
import * as test from './models/6-test'

const init = () => {
  db.connect(
    config.db.host,
    config.db.port,
    config.db.id,
    config.db.pw,
    config.db.dbName,
    (rsc) => {
      if (rsc == '1') {
        console.log('DB Connection SUCCESS!')
      }
    },
  )
}

const insert = (table, data) => {
  const query = queryGenerator(table, data)

  console.time(`insertData - ${table}`)

  db.getResult(query, '', (err, results) => {
    if (err) {
      console.log(results)
    } else {
      console.timeEnd(`insertData - ${table}`)
    }
  })
}

export { init, insert }
