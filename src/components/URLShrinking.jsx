import { useState } from 'react';
import './URLShrinking.css';

const URLShrinking = () => {
  const [longURL, setLongUrl] = useState("https://example.com");
  const [customCode, setCustomCode] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isDisabled, setIsDisabled] = useState(false); // حالة لتعطيل الزر

  const handleLongURLChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleCustomCodeChange = (e) => {
    setCustomCode(e.target.value);
  };

  const handleShortenURL = () => {
    if (customCode.length > 4) {
      setShortUrl(`https://cpt405.co/${customCode}`);
    } else {
      const baseURL = 'https://cpt405.co/';
      const generatedCode = customCode || Math.random().toString(36).substr(2, 6);
      setShortUrl(`${baseURL}${generatedCode}`);
    }
    setIsDisabled(true); // تعطيل الزر بعد التوليد
  };

  return (
    <div className="shrink-url-form">
      <h1>Link Shrinker</h1>
      <div className="form-group">
        <label htmlFor="longURL">Long URL:</label>
        <input
          type="text"
          id="longURL"
          value={longURL}
          onChange={handleLongURLChange}
        />
        <label htmlFor="customCode">Enter short code:</label>
        <input
          type="text"
          id="customCode"
          value={customCode}
          onChange={handleCustomCodeChange}
        />
      </div>
      <button 
        className="submit-btn" 
        onClick={handleShortenURL}
        disabled={isDisabled} // تعطيل الزر إذا تم إنشاء رابط
      >
        Shorten URL
      </button>
      <div className="result">
        <label htmlFor="shortUrl">Short URL:</label>
        <input type="text" id="shortUrl" value={shortUrl} readOnly />
      </div>
    </div>
  );
};

export default URLShrinking;
