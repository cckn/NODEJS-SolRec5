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
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'FQ',
    modbusAddress: 36,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PF',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_R_CRNT',
    modbusAddress: 33,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_RS_VOLT',
    modbusAddress: 30,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_S_CRNT',
    modbusAddress: 34,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_ST_VOLT',
    modbusAddress: 31,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_T_CRNT',
    modbusAddress: 35,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_TR_VOLT',
    modbusAddress: 32,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'REACT_PWR',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TOTAL_CHARGE_AMT',
    modbusAddress: 38,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TOTAL_DISCHARGE_AMT',
    modbusAddress: 39,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
]

export { tableInfo, dataActions }
