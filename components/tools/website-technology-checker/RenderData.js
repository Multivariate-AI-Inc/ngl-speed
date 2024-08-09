import React from 'react';
const RenderData = ({ techstackData, aboutData }) => {
  return (
    <div className="grid">
      <div className="column">
        <h2 className="item-heading">
          Technology Stack
        </h2>
        {Object.entries(techstackData).map(([key, value]) =>
          value !== null ? (
            <div key={key} className="item">
              <div className="item-heading">{key}</div>
              <div className="item-content">
                {Array.isArray(value)
                  ? value.map((item, index) => <span key={index}>{item}</span>)
                  : value}
              </div>
            </div>
          ) : null
        )}
      </div>
      <div className="column">
        <h2 className="item-heading">About</h2>
        {Object.entries(aboutData).map(([key, value]) =>
          value !== null ? (
            <div key={key} className="item">
              <div className="item-heading">{key}</div>
              <div className="item-content">
                {Array.isArray(value)
                  ? value.map((item, index) => <span key={index}>{item}</span>)
                  : value}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default RenderData;
