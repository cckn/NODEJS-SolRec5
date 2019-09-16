import action from '../action'
import actionTypes from '../actionTypes'

const tableInfo = {
  tableName: 'ess_4_ro',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'ACT_PWR',
    modbusAddress: 37,
    action: (hours, min) => {
      return hours < 6
        ? {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 1 },
          }
        : hours < 18
        ? {
            type: actionTypes.RANDOM_VALUE,
            value: 78,
            options: { delta: 0.1, range: 20 },
          }
        : {
            type: actionTypes.GO_STATIC_VALUE,
            value: 0,
            options: { delta: 1 },
          }
    },
  },
  {
    name: 'FQ',
    modbusAddress: 36,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 60, { delta: 0.01, range: 0.1 }),
  },
  {
    name: 'PF',
    // modbusAddress: 110,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 20, { delta: 0.01, range: 10 }),
  },
  {
    name: 'PHASE_R_CRNT',
    modbusAddress: 33,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_RS_VOLT',
    modbusAddress: 30,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'PHASE_S_CRNT',
    modbusAddress: 34,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_ST_VOLT',
    modbusAddress: 31,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'PHASE_T_CRNT',
    modbusAddress: 35,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_TR_VOLT',
    modbusAddress: 32,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'REACT_PWR',
    // modbusAddress: 110,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'TOTAL_CHARGE_AMT',
    modbusAddress: 38,
    action: () => ({
      type: actionTypes.CALLBACK_FUNCTION,
      value: 12321,
      options: { ref: ['ACT_PWR'], f: (prev, ref) => prev + ref[0] / 3600 },
    }),
  },
  {
    name: 'TOTAL_DISCHARGE_AMT',
    modbusAddress: 39,
    action: () => ({
      type: actionTypes.CALLBACK_FUNCTION,
      value: 11942,
      options: { ref: ['ACT_PWR'], f: (prev, ref) => prev + ref[0] / 3600 },
    }),
  },
]

export { tableInfo, dataActions }
