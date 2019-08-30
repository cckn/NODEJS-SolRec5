const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

const config = {
  db: {
    host: '127.0.0.1',
    // host: '222.102.213.36',
    id: 'solrec5',
    pw: 'solrec5@123',
    port: 3306,
    dbName: 'solrec5v2',
  },
  updateInterval: 5 * MINUTE,
}

export default config
