# Currency Converter Application

A complete currency converter web application that fetches real-time exchange rates from an external API.

## Features

- **Real-time Exchange Rates**: Fetches current exchange rates from currency API
- **Multiple Currencies**: Support for converting between various currencies
- **Country Flags**: Visual representation of currencies with country flags
- **Dynamic Updates**: Automatically updates when currency selection changes
- **User-friendly Interface**: Clean and intuitive design

## Files

- `index.html` - HTML structure for the converter interface
- `mains.js` - Main application logic with API integration
- `codes.js` - Currency codes and country mappings
- `stylee.css` - Styling for the converter

## How It Works

1. User selects a "from" currency
2. User selects a "to" currency
3. User enters an amount
4. Application fetches current exchange rate from API
5. Calculates and displays the converted amount

## API

The application uses the currency API from:
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1
```

## Usage

1. Open `index.html` in a web browser
2. Select the source currency from the first dropdown
3. Select the target currency from the second dropdown
4. Enter the amount to convert
5. Click the convert button or wait for automatic conversion
6. View the converted amount displayed below

## Key Technologies

- Fetch API for HTTP requests
- Async/await for asynchronous operations
- DOM manipulation for dynamic UI updates
- External API integration for real-time data

