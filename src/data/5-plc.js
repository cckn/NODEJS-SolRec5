const tableInfo = {
  tableName: 'plc_5_ro',
  dateTimeColmnName: 'w_dt',
}

const dataSpec = {
  TEMP: {
    default: { base: 23.5, range: 20, delta: 0.1 },
  },
  HUMIDITY: {
    default: { base: 100, range: 20, delta: 1 },
  },
  EMERGENCY: {
    default: { base: 1, delta: null },
  },
  AIRCON_STATUS: {
    default: { base: 1, delta: 1 },
  },
  AIRCON_MIN_VALUE: {
    default: { base: 100, range: 20, delta: 1 },
  },
  AIRCON_MAX_VALUE: {
    default: { base: 100, range: 20, delta: 1 },
  },
}

const getDataSpec = (currentHours) => {
  console.log(currentHours)

  return dataSpec
}

const data = {}

export { tableInfo, getDataSpec, data }
