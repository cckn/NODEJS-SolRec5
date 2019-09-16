import actionTypes from '../actionTypes'

const tableInfo = {
  tableName: 'plc_5_ro',
  dateTimeColmnName: 'w_dt',
}

const dataActions = [
  {
    name: 'TEMP',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'HUMIDITY',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'EMERGENCY',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'AIRCON_STATUS',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'AIRCON_MIN_VALUE',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
  {
    name: 'AIRCON_MAX_VALUE',
    action: () => ({
      type: actionTypes.FIXED_VALUE,
      value: 200,
      options: { delta: 2 },
    }),
  },
]

export { tableInfo, dataActions }
