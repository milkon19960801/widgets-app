import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
