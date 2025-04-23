# Quotes Display Browser Extension

A simple browser extension that displays random inspirational quotes from the [quotable.io](https://quotable.io/) API. The extension provides a clean, user-friendly interface to fetch and display motivational quotes with just a click.

## Features

- Displays random inspirational quotes from a vast collection
- Clean and simple user interface
- One-click quote generation
- Lightweight and fast
- Works offline (browser extension)
- Uses the reliable quotable.io API

## Installation

To install this extension in development mode:

1. Clone this repository or download the source code
2. Open your Chrome/Firefox/Edge browser and navigate to the extensions page
   - For Chrome: go to `chrome://extensions/`
   - For Firefox: go to `about:debugging#/runtime/this-firefox`
   - For Edge: go to `edge://extensions/`
3. Enable "Developer mode" (usually a toggle switch in the top-right corner)
4. Click "Load unpacked" (Chrome/Edge) or "Load Temporary Add-on" (Firefox)
5. Select the folder containing the extension files

## Usage

1. After installation, you'll see the extension icon in your browser's toolbar
2. Click the extension icon to open the popup
3. The popup will show the "Quote extension" interface
4. Click the "Generate new quote" button to fetch and display a new random quote

## Technical Details

The extension is built using:
- HTML, CSS, and JavaScript
- Manifest V2 format
- [quotable.io](https://quotable.io/) API for quote generation
- Browser Extension APIs

## Project Structure

```
├── manifest.json     # Extension configuration
├── popup.html       # Main UI file
├── popup.js         # Core functionality
├── LICENSE          # MIT license
└── README.md        # Documentation
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
