import db from './mysql';
import config from './config';

const init = () => {
  db.connect(
    config.db.host,
    config.db.port,
    config.db.id,
    config.db.pw,
    config.db.dbName,
    (rsc) => {
      if (rsc == '1') {
        console.log('DB Connection SUCCESS!');
      }
    },
  );
};

const dbInsert = () => {
  // DB Insert
  try {
    db.insertData(new Date(), 'text');
  } catch (error) {
    console.log(error);
  }
};

if (require.main === module) {
  init();
  setInterval(() => {
    dbInsert();
  }, 1000);
}
