const sampleData = require('./sampleInput.json');
const inquirer = require('inquirer');

var questions = [
  {
    type: 'input',
    name: 'equipmentID',
    message: '-Equipment Id',
  },
  {
    type: 'input',
    name: 'start',
    message: '-Start Time',
  },
  {
    type: 'input',
    name: 'end',
    message: '-End Time',
  },
];

console.log('- Considering the above example and inputs as :');
/*
----------------------------
    To Take Input from user
----------------------------
*/
inquirer.prompt(questions).then(async (answers) => {
  await _getAllSensor(answers['equipmentID'], answers['start'], answers['end']);
});

/*
-------------------------------------
    Function to get all sensor data
-------------------------------------
*/
const _getAllSensor = async (equipmentID, start, end) => {
  var x = Object.keys(sampleData.EquipmentsMapping);
  for (i = 0; i < x.length; i++) {
    if (x[i] === equipmentID) {
      // If equipment id match
      const data = sampleData.EquipmentsMapping[x[i]]; // save data into data variable
      var sensorData = []; // Empty array for inserting the result
      for (let j = 0; j < data.length; j++) {
        if (data[j].start_time >= start && data[j].end_time <= end) {
          // Match condition
          sensorData.push(data[j]); // push data
        }
      }
      // Iterate the result
      if (sensorData && sensorData.length > 0) {
        for (let k = 0; k < sensorData.length; k++) {
          console.log(
            `- ${sensorData[k]._id} - ${sensorData[k].start_time} to ${sensorData[k].end_time}`
          );
          return sensorData;
        }
      } else {
        console.log('No result Found');
      }
    }
  }
};

module.exports = { _getAllSensor };
