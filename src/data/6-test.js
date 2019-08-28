import actionTypes from './actionTypes'

const tableInfo = {
  tableName: 'test',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'random',
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
            options: { delta: 1, range: 10 },
          }
        : hours < 16
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 40,
            options: { delta: 1, range: 10 },
          }
        : hours < 18
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 20,
            options: { delta: 1, range: 10 },
          }
        : hours < 19
        ? {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 2 },
          }
        : {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 1 },
          }
    },
  },
  // {
  //   name: 'static',
  //   spec: {
  //     default: { type: TYPES.STATIC, value: 200, delta: 1 },
  //   },
  // },
  // {
  //   name: 'sum',
  //   spec: {
  //     default: { type: TYPES.TOTAL, value: 100, ref: 'random' },
  //   },
  // },
  // {
  //   name: 'state',
  //   spec: {
  //     default: { type: TYPES.STATE, value: 1, delta: null },
  //   },
  // },
]

export { tableInfo, dataActions }
