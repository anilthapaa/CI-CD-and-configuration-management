const fs = require('fs');
const path = require('path');
require('dotenv').config();

const buildJsDir = path.join(__dirname, '../build/static/js');
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

if (!apiKey) {
  console.error('❌ API key not found in environment.');
  process.exit(1);
}

fs.readdirSync(buildJsDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(buildJsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    if (content.includes('__API_KEY_PLACEHOLDER__')) {
      content = content.replace(/__API_KEY_PLACEHOLDER__/g, apiKey);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Injected API key into: ${file}`);
    }
  }
});
