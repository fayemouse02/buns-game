// scripts/generateManifest.js
// const fs = require('fs');
// const path = require('path');

// const baseDir = path.join(__dirname, './buildabear');
// const sections = fs.readdirSync(baseDir).filter(name => fs.statSync(path.join(baseDir, name)).isDirectory());

// const manifest = {};

// sections.forEach(section => {
//   const files = fs.readdirSync(path.join(baseDir, section)).filter(file => file.endsWith('.png'));
//   manifest[section] = files;
// });

// fs.writeFileSync(path.join(baseDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
