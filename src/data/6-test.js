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
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 2 },
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
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'sum',
    action: () => ({
      type: actionTypes.CALLBACK_FUNCTION,
      value: 200,
      options: { ref: ['random'], f: (prev, ref) => prev + ref[0] / 12 },
    }),
  },
  // {
  //   name: 'static',
  //   action: () => ({
  //     type: actionTypes.FIXED_VALUE,
  //     value: 200,
  //     options: { delta: 2 },
  //   }),
  // },
  // {
  //   name: 'sum',
  //   spec: {
  //     default: { type: TYPES.TOTAL, value: 100, ref: 'random' },
  //   },
  // },
  {
    name: 'state',
    action: (hours, min) => {
      return {
        type: actionTypes.RANDOM_VALUE,
        value: 6000,
        options: { delta: 1000, range: 10 },
      }
    },
  },
]

export { tableInfo, dataActions }
