const fs = require('fs');
const path = require('path');

const protestersDirectory = '../protesters';
// Check if protesters directory not exists
if (!fs.existsSync(protestersDirectory)) {
  fs.mkdirSync(protestersDirectory);
}

function createNewProtester(district, protester) {
  const districtPath = path.join(protestersDirectory, district.toLowerCase());
  const protesterPath = path.join(districtPath, protester.toLowerCase());


  // Check if district exists
  if (!fs.existsSync(districtPath)) {
    fs.mkdirSync(districtPath);
  }

  // Check if protester already exists
  if (fs.existsSync(protesterPath)) {
    console.error(`Protester ${protester} already exists in district ${district}`);
    return;
  }

  // Create Protester directory and basic stature
  fs.mkdirSync(protesterPath);
  fs.mkdirSync(path.join(protesterPath, 'photos'));


  // Create info.json file (you can customize the structure)
  const info = {
    name: protester,
    district: district,
    address: '',
    gender: 'Male/Female',
    type: 'student/journalist/civilian',
    institute: 'institute',
    class: '5/6/7/8/9/10/11/12/Honours/Masters',
    status: 'Injured/Killed',
    date: '',
    dateOfBirth: '',
    dateOfDeath: '',
    brief: ''
    // Add other fields as needed
  };
  fs.writeFileSync(path.join(protesterPath, 'info.json'), JSON.stringify(info, null, 2));

  console.log(`Protester ${protester} created successfully in district ${district}.`);
}

const args = process.argv.slice(2);
const district = args[0];
const protester = args[1];

createNewProtester(district, protester);
