import db from './mysql'
import config from './config'

import { queryGenerator } from './data/reducer'
import * as test from './data/6-test'

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

const insert = (data, dataSpec) => {
  const query = queryGenerator(data, dataSpec)

  console.time('insertData')

  db.getResult(query, '', (err, results) => {
    if (err) {
      console.log(results)
    } else {
      console.timeEnd('insertData')
    }
  })
}

export { init, insert }
