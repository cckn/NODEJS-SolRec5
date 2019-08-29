import _ from 'lodash'
import actionTypes from './actionTypes'
import * as db from './db'

const dataObject = {}

const insertData = (table, key, value) => {
  dataObject[table][key] = value
}

const getData = (table, key) => dataObject[table][key]

const reducer = (table, key, action) => {
  if (!dataObject.hasOwnProperty(table)) {
    dataObject[table] = { [key]: action.value }
  }

  const { value: targetValue, options } = action

  let prevValue = getData(table, key)

  if (prevValue === undefined) {
    insertData(table, key, targetValue)
    prevValue = targetValue
  }

  switch (action.type) {
    case actionTypes.FIXED_VALUE: {
      return
    }
    case actionTypes.GO_STATIC_VALUE: {
      const { delta } = options
      let result

      if (_.inRange(prevValue, targetValue - delta, targetValue + delta)) {
        result = targetValue
      } else {
        const randomDelta = _.random(delta, true)
        result =
          targetValue < prevValue
            ? prevValue - randomDelta
            : prevValue + randomDelta
      }
      insertData(table, key, result)
      return
    }

    case actionTypes.RANDOM_VALUE: {
      const { range, delta } = options
      let result =
        targetValue - range > prevValue
          ? prevValue + _.random(delta, true)
          : targetValue + range > prevValue
          ? prevValue + _.random(-delta, delta, true)
          : prevValue + _.random(-delta, 0, true)

      insertData(table, key, result)
      return
    }
    case actionTypes.CALLBACK_FUNCTION: {
      const { ref, f } = options
      const refValue = ref.map((refKey) => getData(table, refKey))
      const newData = f(getData(table, key), refValue)

      insertData(table, key, newData)
      return
    }
    default:
      throw new Error(`정의되지 않은 actionType : ${action.type}`)
  }
}

const getDataObject = () => dataObject

const insertDb = () => {
  const tables = Object.keys(dataObject)

  tables.forEach((table) => {
    const data = dataObject[table]
    db.insert(table, data)
  })
}
export { insertData, reducer, getDataObject, insertDb }
