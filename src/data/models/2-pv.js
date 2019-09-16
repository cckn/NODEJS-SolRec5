import action from '../action'
import actionTypes from '../actionTypes'

const tableInfo = {
  tableName: 'pv_2_ro',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'ACT_PWR',
    modbusAddress: 27,
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
    modbusAddress: 26,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 60, { delta: 0.01, range: 0.1 }),
  },
  {
    // TODO
    name: 'PF',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_R_CRNT',
    modbusAddress: 23,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_RS_VOLT',
    modbusAddress: 20,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'PHASE_S_CRNT',
    modbusAddress: 24,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_ST_VOLT',
    modbusAddress: 21,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'PHASE_T_CRNT',
    modbusAddress: 25,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 100, { delta: 0.01, range: 60 }),
  },
  {
    name: 'PHASE_TR_VOLT',
    modbusAddress: 22,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 380, { delta: 0.01, range: 10 }),
  },
  {
    name: 'REACT_PWR',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TOTAL_POWER_AMT',
    modbusAddress: 28,
    action: () => ({
      type: actionTypes.CALLBACK_FUNCTION,
      value: 8200,
      options: { ref: ['ACT_PWR'], f: (prev, ref) => prev + ref[0] / 3600 },
    }),
  },
]

export { tableInfo, dataActions }
