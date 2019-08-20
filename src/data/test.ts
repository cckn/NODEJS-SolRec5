const tableInfo = {
  tableName: 'test',
  dateTimeColmnName: 'timestamp',
}

const dataSpec = {
  data1: {
    default: { base: 100, range: 20, delta: 1 },
    12: { base: 100, range: 20, delta: 1 },
  },
  data2: {
    default: { base: 200, range: 20, delta: 1 },
    12: { base: 200, range: 20, delta: 1 },
  },
}

const getDataSpec = (currentHours) => {
  console.log(currentHours)

  return dataSpec
}

const data = {}

export { tableInfo, getDataSpec, data }
