const queryGenerator = (table, data) => {
  if (!data) {
    return
  }

  return `replace into ${table} set w_dt=now(), 
         ${Object.keys(data).map((key) => `${key}=${data[key]}`)}`
}
export { queryGenerator }
