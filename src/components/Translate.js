import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    lable: 'Afrikaans',
    value: 'af',
  },
  {
    lable: 'Arabic',
    value: 'ar',
  },
  {
    lable: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
