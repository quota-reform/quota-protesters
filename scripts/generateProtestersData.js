const fs = require('fs');
const path = require('path');

const sourceProtestersDir = path.join(__dirname, '../', 'protesters');
const targetProtestersDir = path.join(__dirname, '../', 'public', 'protesters');

function restructureData() {
  const districts = fs.readdirSync(sourceProtestersDir);

  // Create the target directories
  if (!fs.existsSync(targetProtestersDir)) {
    fs.mkdirSync(targetProtestersDir, { recursive: true });
  }
  const districtsDir = path.join(targetProtestersDir);
  if (!fs.existsSync(districtsDir)) {
    fs.mkdirSync(districtsDir, { recursive: true });
  }

  // Create allProtesters array
  const allProtesters = [];

  districts.forEach(district => {
    const districtPath = path.join(sourceProtestersDir, district);
    const targetDistrictPath = path.join(districtsDir, district);
    const districtProtesters = [];

    if (!fs.existsSync(targetDistrictPath)) {
      fs.mkdirSync(targetDistrictPath, { recursive: true });
    }

    const protesters = fs.readdirSync(districtPath);

    protesters.forEach(protester => {
      const protesterPath = path.join(districtPath, protester);
      const protesterData = JSON.parse(fs.readFileSync(path.join(protesterPath, 'info.json'), 'utf-8'));
      districtProtesters.push(protesterData);
      allProtesters.push(protesterData);

      // Move media files
      const mediaDir = path.join(protesterPath, 'photos');
      const targetMediaDir = path.join(targetDistrictPath, protester);
      if (fs.existsSync(mediaDir)) {
        if (!fs.existsSync(targetMediaDir)) {
          fs.mkdirSync(targetMediaDir, { recursive: true });
        }
        fs.cpSync(mediaDir, targetMediaDir, { recursive: true });
      }
    });

    // Write district protesters to JSON
    fs.writeFileSync(path.join(targetDistrictPath, 'protesters.json'), JSON.stringify(districtProtesters, null, 2));
  });

  // Write all protesters to JSON
  fs.writeFileSync(path.join(targetProtestersDir, 'all-protesters.json'), JSON.stringify(allProtesters, null, 2));
  console.log('Protesters data generated successfully.');

}

restructureData();
