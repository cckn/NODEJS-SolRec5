import { getResult } from './mysql'

const insertData = (timestamp, text) => {
  console.time('insertData')
  const query = `replace into test 
        set
            timestamp=now(), data1=1.1,data2=0.3
      `

  const sql = query

  getResult(sql, '', (err, results) => {
    if (err) {
      console.log(results)
    } else {
      console.timeEnd('insertData')
    }
  })
}

export { insertData }
