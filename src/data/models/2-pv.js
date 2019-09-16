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
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'FQ',
    modbusAddress: 26,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PF',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_R_CRNT',
    modbusAddress: 23,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_RS_VOLT',
    modbusAddress: 20,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_S_CRNT',
    modbusAddress: 24,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_ST_VOLT',
    modbusAddress: 21,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_T_CRNT',
    modbusAddress: 25,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_TR_VOLT',
    modbusAddress: 22,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'REACT_PWR',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TOTAL_POWER_AMT',
    modbusAddress: 28,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
]

export { tableInfo, dataActions }
