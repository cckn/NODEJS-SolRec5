/**
 * Modified by PARK J. 2016.12.  ~
 */

import db from "./mysql";

const insertData = (
  seqNum,
  charge_state,
  array_voltage,
  battery_voltage,
  charge_current,
  output_power,
  callback
) => {
  console.time("insertData");
  const query = `replace into tb_values 
        (
            seqNum,
            datetime,
            charge_state,
            array_voltage,
            battery_voltage,
            charge_current,
            output_power
        ) 
            value 
            (
                '${seqNum}', 
                now(), 
                '${charge_state}', 
                '${array_voltage}', 
                '${battery_voltage}', 
                '${charge_current}', 
                '${output_power}'
            );`;

  const sql = query;

  db.getResult(sql, "", function(err, results) {
    console.timeEnd("insertData");
    callback(err, results);
  });
};

export { insertData };
