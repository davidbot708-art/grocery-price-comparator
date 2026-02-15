// Grocery Price Comparator - Practical Version
// Opens store search pages in browser for manual comparison

const { exec } = require('child_process');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: node index.js <item1> [item2] ...');
  console.log('Example: node index.js "almond milk" "eggs" "bread"');
  process.exit(0);
}

const STORES = [
  { 
    name: 'Target', 
    url: (item) => `https://www.target.com/s?searchTerm=${encodeURIComponent(item)}`
  },
  { 
    name: 'Whole Foods', 
    url: (item) => `https://www.wholefoodsmarket.com/search?text=${encodeURIComponent(item)}`
  },
  { 
    name: "Trader Joe's", 
    url: (item) => `https://www.traderjoes.com/search?query=${encodeURIComponent(item)}`
  },
  { 
    name: 'Safeway', 
    url: (item) => `https://www.safeway.com/search/?q=${encodeURIComponent(item)}`
  },
  {
    name: 'Costco',
    url: (item) => `https://www.costco.com/s?keyword=${encodeURIComponent(item)}`
  },
  {
    name: 'Amazon Fresh',
    url: (item) => `https://www.amazon.com/s?k=${encodeURIComponent(item)}&rh=p_36%3A-1253507011`
  }
];

console.log(`\n🛒 Opening store search pages for: ${args.join(', ')}\n`);

// Build a simple HTML comparison page
let html = `
<!DOCTYPE html>
<html>
<head>
  <title>Grocery Price Comparator</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    h1 { color: #2c3e50; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
    th { background-color: #3498db; color: white; }
    tr:hover { background-color: #f5f5f5; }
    a { color: #3498db; text-decoration: none; }
    a:hover { text-decoration: underline; }
    .item { font-weight: bold; }
    .price-input { width: 80px; padding: 5px; }
    .total { font-weight: bold; background-color: #ecf0f1; }
  </style>
</head>
<body>
  <h1>🛒 Grocery Price Comparator</h1>
  <p>Enter prices from each store, then calculate the best deal!</p>
  
  <table>
    <tr>
      <th>Item</th>
      <th>Target</th>
      <th>Whole Foods</th>
      <th>Trader Joe's</th>
      <th>Safeway</th>
      <th>Costco</th>
      <th>Amazon Fresh</th>
    </tr>
`;

for (const item of args) {
  html += `    <tr>\n      <td class="item">${item}</td>`;
  for (const store of STORES) {
    html += `<td><a href="${store.url(item)}" target="_blank">🔍 Check</a></td>`;
  }
  html += `    </tr>\n`;
}

html += `  </table>
  
  <h2>📝 Quick Links</h2>
  <ul>`;

for (const item of args) {
  html += `<li><strong>${item}:</strong></li><ul>`;
  for (const store of STORES) {
    html += `<li><a href="${store.url(item)}" target="_blank">${store.name}</a></li>`;
  }
  html += `</ul>`;
}

html += `  </ul>
</body>
</html>`;

// Write HTML file
const fs = require('fs');
fs.writeFileSync('/tmp/grocery-comparator.html', html);

console.log('📄 Created comparison page: /tmp/grocery-comparator.html');
console.log('\n🌐 Opening in browser...\n');

// Open in browser
exec('open /tmp/grocery-comparator.html');

console.log('Done! Check your browser for the comparison page.');
console.log('\n📋 Store Search URLs generated for:');
console.log(args.join(', '));
