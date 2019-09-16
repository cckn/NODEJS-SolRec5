import action from '../action'
import actionTypes from '../actionTypes'

const tableInfo = {
  tableName: 'pcs_3_ro',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'AC_PWR',
    modbusAddress: 7,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'CHARGE_STATUS',
    modbusAddress: 101,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'DC_CRNT',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'DC_PWR',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'DC_VOLT',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'FAULT',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'FQ',
    modbusAddress: 6,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_R_CRNT',
    modbusAddress: 3,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_RS_VOLT',
    modbusAddress: 0,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_S_CRNT',
    modbusAddress: 4,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_ST_VOLT',
    modbusAddress: 1,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_T_CRNT',
    modbusAddress: 5,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'PHASE_TR_VOLT',
    modbusAddress: 2,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'STATUS',
    modbusAddress: 100,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TARGET_PWR',
    modbusAddress: 102,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'TEMP_IN_PANEL',
    // modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
]

export { tableInfo, dataActions }
