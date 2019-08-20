import db from './mysql/index.js'
import config from './config'

import * as test from './data/test'
import * as generator from './data/generator'

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

const dbInsert = () => {
  const data = generator.dataGenerator(
    test.getDataSpec(new Date().getHours()),
    test.data,
  )
  const query = generator.queryGenerator(test.tableInfo, data)
  console.table(data)
  console.log(query)

  console.time('insertData')

  db.getResult(query, '', (err, results) => {
    if (err) {
      console.log(results)
    } else {
      console.timeEnd('insertData')
    }
  })
}

if (require.main === module) {
  init()

  setInterval(() => {
    dbInsert()
    console.table(test.data)
  }, 1000)
}
