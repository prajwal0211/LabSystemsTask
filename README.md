# Document Editor

A simple web-based document editor application built with React.js.

## Overview

The Document Editor allows users to create, edit, and download documents. It provides functionalities to customize document properties such as title, author, category. Users can also format text content using a rich text editor.

## Features

- Create and edit documents
- Customize document properties (Title, Author, Category)
- Format text content (Bold, Italic, Underline)
- Download documents as text files

## Setup Instructions

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/prajwal0211/LabSystemsTask.git
    ```
2. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the application:

    ```bash
    npm start
    ```

2. Open your web browser and go to `http://localhost:3000` to view the Document Editor.

3. Fill in the document information (Title, Author, Category).

4. Use the text editor to write or edit the document content.

5. Customize properties by toggling checkboxes.

6. Click on the "Download Report" button to generate and download the report with the selected properties and document content.

### Customization

- Modify components, styles, or functionality according to your requirements.
- Integrate additional features or libraries by installing them via npm and then importing them into your project.

### Deployment

- Build the project using:

    ```bash
    npm run build
    ```

- Deploy the generated build files to your hosting provider.

### Project Structure

- **src**: Contains the source code of the application.
  - **components**: Contains React components used in the application.
  - **textEditor.js**: Contains the TextEditor component for editing document content.
  - **App.js**: Main component of the application.
- **public**: Contains public assets like HTML files and images.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Contains project documentation and instructions.

## Conclusion

The Document Editor is a flexible and customizable tool for creating and managing documents. If you encounter any issues or have any questions, feel free to reach out for assistance.
