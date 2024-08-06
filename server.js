const fs = require('fs');
const path = require('path');

// Define the output directory and file name
const outputDir = path.join(__dirname, 'dist');
const outputFile = path.join(outputDir, 'env-variables.txt');

// Ensure the 'dist' directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all environment variables
const envVariables = Object.entries(process.env)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');

// Write the environment variables to the file
fs.writeFile(outputFile, envVariables, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log(`Environment variables have been written to ${outputFile}`);
  }
});
