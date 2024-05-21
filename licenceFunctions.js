
const licenses = ['MIT', 'Apache', 'GPL', 'BSD', 'MPL', 'None'];

const badges = ['![Static Badge](https://img.shields.io/badge/Licence-MIT-red)',
    '![Static Badge](https://img.shields.io/badge/Licence-Apache_2.0-orange)', 
    '![Static Badge](https://img.shields.io/badge/Licence-CPL-green)',
    '![Static Badge](https://img.shields.io/badge/Licence-BSD-blue)',
    '![Static Badge](https://img.shields.io/badge/Licence-MPL-purple)',
  ]



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


function renderLicenseLink(license) {
if (license === 'MIT') {
  return 'https://opensource.org/license/mit';
} else if (license === 'Apache') {
  return 'https://opensource.org/license/apache-2-0';
} else if (license === 'GPL') {
  return 'https://opensource.org/license/gpl-3-0';
} else if (license === 'BSD') {
  return 'https://opensource.org/license/bsd-1-clause';
} else if (license === 'MPL') {
  return 'https://opensource.org/license/mpl-2-0';
} else {
  return '';
}
};

function renderLicenseSection(license) {
if (license === 'None') {
  return '';
} else {
  return `## License

This application is covered under the ${license} license. 
For more information, visit the following link:
${renderLicenseLink(license)}
 `;
}
};
       



module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection, licenses, badges}