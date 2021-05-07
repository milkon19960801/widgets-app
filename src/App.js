import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javaScript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite javaScript library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
