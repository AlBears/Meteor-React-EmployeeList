import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>Hello there!</div>
  );
};

Meteor.startup(() => {
  ReactDom.render(<App/>, document.querySelector('.container'));
});
