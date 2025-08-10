const fs = require('fs');
const path = './index.html';

const oldUrl = 'https://ccno-proxy-production.up.railway.app/upload-evidence'; // old URL in your HTML
const newUrl = 'https://script.google.com/macros/s/AKfycbzazSWQ5xaTO_68CndnmdiXCKAQ__7Azw4G99DdwnLE_u-jc1q7vbUh1P6KnBefWZIlVw/exec';

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  const updated = data.replace(new RegExp(oldUrl, 'g'), newUrl);

  fs.writeFile(path, updated, 'utf8', (err) => {
    if (err) {
      console.error('Error writing HTML file:', err);
      return;
    }
    console.log('Backend URL updated successfully!');
  });
});
