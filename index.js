#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');


// Function to create the folder structure
const createFolderStructure = (rootDir) => {
  const directories = [
    'controllers',
    'models',
    'routes',
    'services',
    'config'
  ];

  directories.forEach((dir) => {
    const dirPath = path.join(rootDir, dir);
    fs.ensureDirSync(dirPath); // Create directory if it doesn't exist
    fs.writeFileSync(path.join(dirPath, 'index.js'), `// ${dir} module`); // Add index.js in each folder
  });

  console.log('MVC folder structure created successfully!');
};

// Main function
const init = () => {
  const targetDir = process.cwd(); // Install in the current working directory
  createFolderStructure(targetDir);
};

init();
