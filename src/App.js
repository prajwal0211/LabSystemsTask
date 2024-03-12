import React, { useState } from "react";
import "./App.css";
import TextEditor from "./textEditor.js";
import html2pdf from "html2pdf.js";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [properties, setProperties] = useState({
    title: true,
    author: true,
    date: true,
    category: true,
    accessPermission: true,
  });

  const handlePropertyChange = (property) => {
    setProperties({
      ...properties,
      [property]: !properties[property],
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const generateReport = () => {
    let reportContent = "";

    if (properties.title) {
      reportContent += `<p><strong>Title:</strong> ${title}</p>`;
    }
    if (properties.author) {
      reportContent += `<p><strong>Author:</strong> ${author}</p>`;
    }
    if (properties.date) {
      const currentDate = new Date().toLocaleString();
      reportContent += `<p><strong>Date:</strong> ${currentDate}</p>`;
    }
    if (properties.category) {
      reportContent += `<p><strong>Category:</strong> ${category}</p>`;
    }
    reportContent += `${content}`;

    const pdfContent = `<div style="margin: 50px;">${reportContent}</div>`;

    const element = document.createElement("div");
    element.innerHTML = pdfContent;

    html2pdf().from(element).save("report.pdf");
  };

  return (
    <div className="container-fluid p-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Document Editor</h1>
      </header>
      <div className="row">
        <div className="col-md-6">
          <h2>Document Information</h2>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorInput" className="form-label">
              Author:
            </label>
            <input
              type="text"
              className="form-control"
              id="authorInput"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="categoryInput" className="form-label">
              Category:
            </label>
            <input
              type="text"
              className="form-control"
              id="categoryInput"
              value={category}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Properties:</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="titleCheckbox"
                checked={properties.title}
                onChange={() => handlePropertyChange("title")}
              />
              <label className="form-check-label" htmlFor="titleCheckbox">
                Title
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="authorCheckbox"
                checked={properties.author}
                onChange={() => handlePropertyChange("author")}
              />
              <label className="form-check-label" htmlFor="authorCheckbox">
                Author
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="dateCheckbox"
                checked={properties.date}
                onChange={() => handlePropertyChange("date")}
              />
              <label className="form-check-label" htmlFor="dateCheckbox">
                Date
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="categoryCheckbox"
                checked={properties.category}
                onChange={() => handlePropertyChange("category")}
              />
              <label className="form-check-label" htmlFor="categoryCheckbox">
                Category
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Content</h2>
          <TextEditor setContent={setContent} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <button className="btn btn-primary" onClick={generateReport}>
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
