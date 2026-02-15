# Grocery Price Comparator - TODO

Future improvements and feature ideas.

## 🔴 High Impact

- [ ] **Automated Price Scraping**
  - Use Playwright for browser automation (most grocery sites block simple requests)
  - Handle JavaScript-heavy pages and bot protection
  - Consider proxy rotation for reliability

- [ ] **Price Persistence & History**
  - SQLite database to store price data over time
  - Track price trends and fluctuations
  - Identify best times to buy specific items

- [ ] **Unit Price Normalization**
  - Calculate price per oz/lb/unit for fair comparison
  - Handle different package sizes (64oz at $5 vs 32oz at $3)
  - Display normalized prices alongside actual prices

## 🟡 Medium Impact

- [ ] **Shopping List Optimizer**
  - Input full shopping list
  - Calculate optimal store combination to minimize total cost
  - Factor in that items can't be split across stores
  - Consider store proximity and trip efficiency

- [ ] **Price Alerts**
  - Set price thresholds for specific items
  - Cron job to check prices periodically
  - Notify via Telegram/email when price drops below threshold

- [ ] **Location-Based Pricing**
  - Use user's location (Bothell, WA) for accurate local prices
  - Handle store-specific regional pricing
  - Show nearby store locations

## 🟢 Nice to Have

- [ ] **OpenClaw Skill Integration**
  - Convert to proper OpenClaw skill
  - Enable chat commands like "compare prices for eggs and milk"
  - Return formatted results via Telegram

- [ ] **Receipt OCR**
  - Snap photo of receipt to auto-populate actual paid prices
  - Track spending history and price accuracy
  - Compare expected vs actual prices

- [ ] **Weekly Deals Integration**
  - Scrape weekly circulars and coupons from each store
  - Highlight items currently on sale
  - Factor deals into price comparisons

- [ ] **Better UI/UX**
  - React/Vue web interface
  - Mobile-friendly design
  - Interactive price comparison charts

- [ ] **Export Options**
  - Export comparison results to CSV/spreadsheet
  - Generate PDF shopping lists
  - Share comparisons via link

## Technical Notes

### Challenges
- Most grocery sites use heavy JavaScript and bot protection
- Real-time scraping requires Playwright + potential proxy rotation
- Prices vary by location and change frequently

### Supported Stores
- Target
- Whole Foods Market
- Trader Joe's
- Safeway
- Costco
- Amazon Fresh

---

*Last updated: February 15, 2026*
