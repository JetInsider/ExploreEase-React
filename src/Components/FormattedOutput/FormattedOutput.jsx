import React from 'react';
import './FormattedOutput.css';
import html2pdf from 'html2pdf.js';

const FormattedOutput = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n').filter(line => line.trim() !== '');
  const elements = [];
  let listItems = [];

  const parseInlineBold = (line, idx) => {
    const parts = [];
    const regex = /\*\*(.*?)\*\*/g;
    let lastIndex = 0;
    let match;
    let keyIndex = 0;

    while ((match = regex.exec(line)) !== null) {
      const before = line.slice(lastIndex, match.index);
      if (before) parts.push(<span key={`${idx}-${keyIndex++}`}>{before}</span>);
      parts.push(<strong key={`${idx}-${keyIndex++}`}>{match[1]}</strong>);
      lastIndex = match.index + match[0].length;
    }

    const after = line.slice(lastIndex);
    if (after) parts.push(<span key={`${idx}-${keyIndex++}`}>{after}</span>);
    return parts;
  };

  lines.forEach((line, idx) => {
    // Full-line headings like **Day 1:**
    if (line.startsWith('**') && line.endsWith('**') && !line.includes(':')) {
      if (listItems.length) {
        elements.push(<ul key={`ul-${idx}`}>{listItems}</ul>);
        listItems = [];
      }
      elements.push(<h3 key={idx}>{line.replace(/\*\*/g, '')}</h3>);
    }

    // Lines with inline bold like "**Morning:** something"
    else if (line.includes('**')) {
      if (listItems.length) {
        elements.push(<ul key={`ul-${idx}`}>{listItems}</ul>);
        listItems = [];
      }
      elements.push(<p key={idx}>{parseInlineBold(line, idx)}</p>);
    }

    // Bullet points (not used in current example but good to keep)
    else if (line.trim().startsWith('*')) {
      listItems.push(<li key={idx}>{line.replace(/^\*\s*/, '')}</li>);
    }

    // Plain paragraph
    else {
      if (listItems.length) {
        elements.push(<ul key={`ul-${idx}`}>{listItems}</ul>);
        listItems = [];
      }
      elements.push(<p key={idx}>{line}</p>);
    }
  });

  if (listItems.length) {
    elements.push(<ul key="ul-final">{listItems}</ul>);
  }

  const handleDownloadPDF = () => {
    const contentElement = document.getElementById('itinerary-content');
    
    const options = {
      margin: 10,
      filename: 'travel-itinerary.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(contentElement).set(options).save();
  };

  return (
    <div className="formatted-output">
      <div id="itinerary-content">
        {elements}
      </div>
      <button 
        className="download-pdf-btn" 
        onClick={handleDownloadPDF}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default FormattedOutput;
