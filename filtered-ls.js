const fs = require('fs');

fs.readdir(process.argv[2], (err, data) => {
  if (err) throw err;
    for (let i = 0; i < data.length; i++){
      if (data[i].includes('.' + process.argv[3])) {
        console.log(data[i]);
      };
    };
});

