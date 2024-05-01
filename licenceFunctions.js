
const licenses = ['MIT', 'Apache', 'GPL', 'BSD', 'MPL', 'None'];

const badges = ['![Static Badge](https://img.shields.io/badge/Licence-MIT-red)',
    '![Static Badge](https://img.shields.io/badge/Licence-Apache-orange)', 
    '![Static Badge](https://img.shields.io/badge/Licence-CPL-green)',
    '![Static Badge](https://img.shields.io/badge/Licence-BSD-blue)',
    '![Static Badge](https://img.shields.io/badge/Licence-MPL-purple)',
  ]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return badges[0];
  } else if (license === 'Apache') {
    return badges[1];
  } else if (license === 'GPL') {    
    return badges[2];
  } else if (license === 'BSD') {
    return badges[3];
  } else if (license === 'MPL') {
    return badges[4];
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'MIT') {
} else if (license === 'Apache') {
} else if (license === 'GPL') {
} else if (license === 'BSD') {
} else if (license === 'MPL') {
} else {
  return '';
}
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}


module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, licenses, badges}