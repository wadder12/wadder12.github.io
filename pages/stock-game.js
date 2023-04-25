const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 150 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 2400 },
    { symbol: "MSFT", name: "Microsoft Corporation", price: 300 },
    { symbol: "AMZN", name: "Amazon.com, Inc.", price: 3300 },
    { symbol: "FB", name: "Facebook, Inc.", price: 350 },
    { symbol: "TSLA", name: "Tesla, Inc.", price: 750 },
    { symbol: "JPM", name: "JPMorgan Chase & Co.", price: 170 },
    { symbol: "JNJ", name: "Johnson & Johnson", price: 170 },
    { symbol: "V", name: "Visa Inc.", price: 240 },
    { symbol: "PG", name: "Procter & Gamble Co.", price: 140 },
    { symbol: "NVDA", name: "NVIDIA Corporation", price: 700 },
    { symbol: "HD", name: "The Home Depot, Inc.", price: 350 },
    { symbol: "BAC", name: "Bank of America Corp", price: 40 },
    { symbol: "DIS", name: "The Walt Disney Company", price: 190 },
    { symbol: "CMCSA", name: "Comcast Corporation", price: 60 },
    { symbol: "PFE", name: "Pfizer Inc.", price: 40 },
    { symbol: "NFLX", name: "Netflix, Inc.", price: 550 },
    { symbol: "VZ", name: "Verizon Communications Inc.", price: 60 },
    { symbol: "CSCO", name: "Cisco Systems, Inc.", price: 50 },
    { symbol: "INTC", name: "Intel Corporation", price: 70 },
    { symbol: "T", name: "AT&T Inc.", price: 30 },
    { symbol: "MRK", name: "Merck & Co., Inc.", price: 80 },
    { symbol: "WMT", name: "Walmart Inc.", price: 140 },
    { symbol: "UNH", name: "UnitedHealth Group Incorporated", price: 400 },
    { symbol: "KO", name: "The Coca-Cola Company", price: 55 },
    { symbol: "BA", name: "The Boeing Company", price: 240 },
    { symbol: "MA", name: "Mastercard Incorporated", price: 350 },
    { symbol: "PEP", name: "PepsiCo, Inc.", price: 145 },
    { symbol: "XOM", name: "Exxon Mobil Corporation", price: 55 },
    { symbol: "CVX", name: "Chevron Corporation", price: 105 },
    { symbol: "TMO", name: "Thermo Fisher Scientific Inc.", price: 500 },
    { symbol: "CRM", name: "Salesforce.com, Inc.", price: 225 },
    { symbol: "ABT", name: "Abbott Laboratories", price: 120 },
    { symbol: "WFC", name: "Wells Fargo & Company", price: 45 },
    { symbol: "MCD", name: "McDonald's Corporation", price: 235 },
    { symbol: "GOOG", name: "Alphabet Inc.", price: 2400 },
    { symbol: "JNJ", name: "Johnson & Johnson", price: 170 },
    { symbol: "V", name: "Visa Inc.", price: 240 },
    { symbol: "PG", name: "Procter & Gamble Co.", price: 140 },
    { symbol: "NVDA", name: "NVIDIA Corporation", price: 700 },
    { symbol: "HD", name: "The Home Depot, Inc.", price: 350 },
    { symbol: "BAC", name: "Bank of America Corp", price: 40 },
    { symbol: "DIS", name: "The Walt Disney Company", price: 190 },
    { symbol: "CMCSA", name: "Comcast Corporation", price: 60 },
    { symbol: "PFE", name: "Pfizer Inc.", price: 40 },
    { symbol: "NFLX", name: "Netflix, Inc.", price: 550 },
    { symbol: "VZ", name: "Verizon Communications Inc.", price: 60 },
    { symbol: "CSCO", name: "Cisco Systems, Inc.", price: 50 },
    { symbol: "INTC", name: "Intel Corporation", price: 70 },
    { symbol: "T", name: "AT&T Inc.", price: 30 },
    { symbol: "MRK", name: "Merck & Co., Inc.", price: 80 },
    { symbol: "WMT", name: "Walmart Inc.", price: 140 },
    { symbol: "UNH", name: "UnitedHealth Group Incorporated", price: 400 },
    { symbol: "KO", name: "The Coca-Cola Company", price: 55 },
    { symbol: "BA", name: "The Boeing Company", price: 240 },
    { symbol: "MA", name: "Mastercard Incorporated", price: 350 },
    { symbol: "PEP", name: "PepsiCo, Inc.", price: 145 },
    { symbol: "XOM", name: "Exxon Mobil Corporation", price: 55 },
    { symbol: "CVX", name: "Chevron Corporation", price: 105 },
    { symbol: "TMO", name: "Thermo Fisher Scientific Inc.", price: 500 },
    { symbol: "CRM", name: "Salesforce.com, Inc.", price: 225 },
    { symbol: "ABT", name: "Abbott Laboratories", price: 120 },
    { symbol: "WFC", name: "Wells Fargo & Company", price: 45 },
    { symbol: "MCD", name: "McDonald's Corporation", price: 235 },
    { symbol: "GOOG", name: "Alphabet Inc.", price: 2400 },
    { symbol: "MMM", name: "3M Company", price: 200 },
    { symbol: "AXP", name: "American Express Company", price: 160 },
    { symbol: "BMY", name: "Bristol-Myers Squibb Company", price: 60 },
    { symbol: "CAT", name: "Caterpillar Inc.", price: 230 },
    { symbol: "DELL", name: "Dell Technologies Inc.", price: 95 },
    { symbol: "DOW", name: "Dow Inc.", price: 70 },
    { symbol: "EMR", name: "Emerson Electric Co.", price: 95 },
    { symbol: "GE", name: "General Electric Company", price: 10 },






  ];
  
  const stockTable = document.getElementById("stock-table");
  
  function updateStockPrices() {
    stocks.forEach((stock) => {
      const priceChange = Math.random() * (0.03 - (-0.03)) + (-0.03); // Random price change between -3% and 3%
      stock.price *= 1 + priceChange;
    });
  }
  
  function displayStocks() {
    const tbody = stockTable.querySelector("tbody");
    tbody.innerHTML = "";
  
    stocks.forEach((stock) => {
      const row = document.createElement("tr");
  
      const symbolCell = document.createElement("td");
      symbolCell.textContent = stock.symbol;
      row.appendChild(symbolCell);
  
      const nameCell = document.createElement("td");
      nameCell.textContent = stock.name;
      row.appendChild(nameCell);
  
      const priceCell = document.createElement("td");
      priceCell.textContent = `$${stock.price.toFixed(2)}`;
      row.appendChild(priceCell);
  
      tbody.appendChild(row);
    });
  }
  
  function startStockGame() {
    displayStocks();
  
    setInterval(() => {
      updateStockPrices();
      displayStocks();
    }, 1000 * 60); // Update stock prices every minute
  }
  
  startStockGame();
  