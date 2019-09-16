import actionTypes from '../actionTypes'
import action from '../action'

const tableInfo = {
  tableName: 'test',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'random',
    modbusAddress: 0,
    action: (hours, min) => {
      return hours < 6
        ? {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 1 },
          }
        : hours < 12
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 30,
            options: { delta: 3, range: 10 },
          }
        : hours < 16
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 40,
            options: { delta: 4, range: 10 },
          }
        : hours < 18
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 15,
            options: { delta: 2, range: 3 },
          }
        : {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 2 },
          }
    },
  },
  {
    name: 'static',
    // modbusAddress: 2,
    action: () => action(actionTypes.FIXED_VALUE, 200, { delta: 2 }),
  },
  {
    name: 'sum',
    modbusAddress: 1,

    action: () =>
      action(actionTypes.CALLBACK_FUNCTION, 200, {
        ref: ['random'],
        f: (prev, ref) => prev + ref[0] / 3600,
      }),
  },
  {
    name: 'state',
    modbusAddress: 4,

    action: (hours, min) => {
      return {
        type: actionTypes.RANDOM_VALUE,
        value: 20,
        options: { delta: 1000, range: 10 },
      }
    },
  },
]

export { tableInfo, dataActions }
