/**
 * Modified by PARK J. 2016.12.  ~
 */

import mysql from 'mysql'

let mysql_pool = null

const connect = (host, port, user, password, database, callback) => {
  mysql_pool = mysql.createPool({
    host: host,
    port: port,
    user: user,
    password: password,
    database: database,
    connectionLimit: 100,
    connectTimeout: 10000,
    waitForConnections: true,
    debug: false,
    acquireTimeout: 60000,
    queueLimit: 0,
    dateStrings: 'date',
  })

  callback('1')
}

const executeQuery = (pool, query, callback) => {
  pool.getConnection(function(err, connection) {
    if (err) {
      return callback(err, null)
    } else if (connection) {
      connection.query({ sql: query, timeout: 60000 }, function(
        err,
        rows,
        fields,
      ) {
        connection.release()
        if (err) {
          return callback(err, null)
        }
        return callback(null, rows)
      })
    } else {
      return callback(true, 'No Connection')
    }
  })
}

const getResult = (query, db_Obj, callback) => {
  if (mysql_pool == null) {
    console.error('mysql is not connected')
    return '0'
  }

  executeQuery(mysql_pool, query, function(err, rows) {
    if (!err) {
      callback(null, rows)
    } else {
      callback(true, err)
    }
  })
}

export { connect, executeQuery, getResult }
