# Grocery Price Comparator

Compare grocery prices across multiple stores using web search.

## Supported Stores

- Target
- Whole Foods Market
- Trader Joe's
- Safeway
- Costco
- Amazon Fresh

## Prerequisites

1. **Node.js** installed
2. **MiniMax API Key** from https://platform.minimax.io/subscribe/coding-plan

## Installation

```bash
git clone https://github.com/davidbot708-art/grocery-price-comparator.git
cd grocery-price-comparator
npm install
```

## Usage

Set your MiniMax API key and search for prices:

```bash
export MINIMAX_API_KEY="your_api_key_here"

# Search for a single item
npx -y @ameno/pi-minimax-mcp search "organic unsweetened almond milk price target whole foods trader joes"

# Search for multiple items
npx -y @ameno/pi-minimax-mcp search "organic pasture raised eggs price target whole foods safeway"
```

## Example Output

```
🛒 Comparing prices for: almond milk

📦 almond milk:
  🔍 Target: $3.49 (Silk Unsweetened)
  🔍 Whole Foods: $3.79 (365 Organic)
  🔍 Trader Joe's: $2.99

💰 Best Prices Found:
  ⭐ Trader Joe's: $2.99
```

## Notes

- Prices are fetched via web search and may vary by location/time
- Some stores may require JavaScript to view current prices
- For best results, verify prices at the store website before shopping
