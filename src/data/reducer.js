import _ from 'lodash'
import actionTypes from './actionTypes'

const dataObject = {}

const insertData = (key, value) => {
  dataObject[key] = value
}

const getData = (key) => dataObject[key]

const reducer = (key, action) => {
  const {
    value: targetValue,
    options: { delta, range },
  } = action

  let prevValue = getData(key)

  if (prevValue === undefined) {
    insertData(key, targetValue)
    prevValue = targetValue
  }

  switch (action.type) {
    case actionTypes.FIXED_VALUE: {
      return
    }
    case actionTypes.GO_STATIC_VALUE: {
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
      insertData(key, result)
      return
    }

    case actionTypes.RANDOM_VALUE: {
      let result =
        targetValue - delta > prevValue
          ? prevValue + _.random(delta, true)
          : targetValue + delta > prevValue
          ? prevValue + _.random(-delta, delta, true)
          : prevValue + _.random(-delta, 0, true)

      insertData(key, result)
      return
    }
    case actionTypes.ADD_TOTAL_VALUE: {
      const value = 1
      insertData(key, value)
      return
    }
    default:
      throw new Error(`정의되지 않은 actionType : ${action.type}`)
  }
}

const getDataObject = () => dataObject

export { insertData, reducer, getDataObject }
