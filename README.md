# PDF Merger

A simple, browser-based PDF merging tool that can merge up to 20 PDF into one PDF. I built first with Python but then turned into a with HTML, JavaScript, and Bootstrap.

Author: Renata Baldissara-Kunnela

https://aiagentsprompt.com

## Description

This application allows users to select multiple PDF files (up to 20) and merge them into a single PDF document. The entire process happens client-side, meaning no server processing is required, and the merged PDF is generated directly in the user's browser.

## Features

- Merge up to 20 PDF files
- Client-side processing (no server required)
- Simple and intuitive user interface
- Progress bar to show merging status
- Automatic download of the merged PDF

## Technologies Used

- HTML5
- JavaScript (ES6+)
- Bootstrap 5.3
- PDF-LIB (for PDF manipulation)
- DownloadJS (for initiating downloads)

## How to Use

1. Open the application in a web browser.
2. Click the "Choose Files" button to select up to 20 PDF files from your computer.
3. Click the "Merge PDFs" button to start the merging process.
4. Wait for the progress bar to reach 100%.
5. The merged PDF will automatically download once the process is complete.

## Installation

No installation is required for end-users. Simply open the `index.html` file in a modern web browser to use the application.

For developers:

1. Clone this repository.
2. Open `index.html` in your preferred browser.
3. To make changes, edit the HTML and JavaScript files as needed.

## Limitations

- The application is limited to merging a maximum of 20 PDF files at a time.
- Very large PDF files may take longer to process and may be limited by the user's device capabilities.
- The application requires a modern web browser with JavaScript enabled.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/pdf-merger/issues) if you want to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
