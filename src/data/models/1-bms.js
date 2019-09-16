import action from '../action'
import actionTypes from '../actionTypes'

const tableInfo = {
  tableName: 'bms_1_ro',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'BMS_CHARGE_STATUS',
    modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, null),
  },
  {
    name: 'BMS_DC_CRNT',
    modbusAddress: 13,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 10, { delta: 0.01, range: 5 }),
  },
  {
    name: 'BMS_DC_PWR',
    modbusAddress: 14,
    action: () => ({
      type: actionTypes.CALLBACK_FUNCTION,
      value: 0,
      options: {
        ref: ['BMS_DC_VOLT', 'BMS_DC_CRNT'],
        f: (prev, ref) => ref[0] * ref[1],
      },
    }),
  },
  {
    name: 'BMS_DC_VOLT',
    modbusAddress: 12,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 720, { delta: 0.01, range: 50 }),
  },
  {
    name: 'BMS_MAX_SOC',
    modbusAddress: 111,
    action: () => action(actionTypes.FIXED_VALUE, 50, { delta: 2 }),
  },
  {
    name: 'BMS_MAX_SOH',
    modbusAddress: 112,
    action: () => action(actionTypes.FIXED_VALUE, 100, { delta: 2 }),
  },
  {
    name: 'BMS_MOD_TEMP_HI',
    modbusAddress: 15,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 24, { delta: 0.01, range: 2 }),
  },
  {
    name: 'BMS_MOD_TEMP_LO',
    modbusAddress: 16,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 24, { delta: 0.01, range: 2 }),
  },
  {
    name: 'BMS_MOD_VOLT_HI',
    modbusAddress: 17,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 3, { delta: 0.01, range: 1 }),
  },
  {
    name: 'BMS_MOD_VOLT_LO',
    modbusAddress: 18,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 3, { delta: 0.01, range: 1 }),
  },
  {
    name: 'BMS_SOC',
    modbusAddress: 10,
    action: () =>
      action(actionTypes.RANDOM_VALUE, 78, { delta: 0.01, range: 20 }),
  },
  {
    name: 'BMS_SOH',
    modbusAddress: 11,
    action: () =>
      action(actionTypes.FIXED_VALUE, 100, { delta: 0.01, range: 20 }),
  },
  {
    name: 'BMS_STATUS',
    modbusAddress: 110,
    action: () => action(actionTypes.FIXED_VALUE, 0, { delta: 2 }),
  },
]

export { tableInfo, dataActions }
