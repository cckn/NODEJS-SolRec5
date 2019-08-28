const queryGenerator = (data, tableInfo) => {
  if (!data) {
    return
  }
  const { tableName, dateTimeColmnName } = tableInfo // string , string
  const dataKeys = Object.keys(data) //array
  return `replace into ${tableName} set ${dateTimeColmnName}=now(), 
         ${dataKeys.map((key) => `${key}=${data[key]}`)}`
}
export { queryGenerator }
