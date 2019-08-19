import { getResult } from './mysql';

const insertData = (timestamp, text) => {
  console.time('insertData');
  const query = `replace into test 
        (
            timestamp, text
        ) 
            value 
            (
                now(), 
                '${text}'
            );`;

  const sql = query;

  getResult(sql, '', (err, results) => {
    if (err) {
      console.log(results);
    } else {
      console.timeEnd('insertData');
    }
  });
};

export { insertData };
