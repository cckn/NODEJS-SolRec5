import _ from 'lodash'

import * as test from './test'

function dataGenerator(dataSpec, data) {
  const dataKeys = Object.keys(dataSpec)

  dataKeys.forEach((key) => {
    if (!data[key]) {
      const {
        default: { base },
      } = dataSpec[key]

      data = { ...data, [key]: base }
    } else {
      const {
        default: { base, range, delta },
      } = dataSpec[key]

      data[key] = data[key] + _.random(-delta, delta, true)
    }
  })
  return data
}

const queryGenerator = (tableInfo, data) => {
  if (!data) {
    return
  }
  const { tableName, dateTimeColmnName } = tableInfo // string , string
  const dataKeys = Object.keys(data) //array
  return `replace into ${tableName} set ${dateTimeColmnName}=now(), 
       ${dataKeys.map((key) => `${key}=${data[key]}`)}`
}

export { dataGenerator, queryGenerator }

if (require.main === module) {
  setInterval(() => {
    test.data = dataGenerator(
      test.getDataSpec(new Date().getHours()),
      test.data,
    )
    const query = queryGenerator(test.tableInfo, test.data)
    console.table(test.data)
    console.log(query)
  }, 1000)
}
