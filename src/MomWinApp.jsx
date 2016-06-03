import React from 'react';
import OutputBox from './OutputBox.jsx';

class MomWinApp extends React.Component {
  constructor() {
    super();
    this.state = { value: '0' };
  }

  handleKeyUp() {
    const { value } = document.getElementById('input');
    this.setState({ value });
  }

  render() {
    const props = {
      id: 'input',
      className: 'input u-full-width',
      type: 'text',
      maxLength: 10,
      autoFocus: 'true',
      onChange: this.handleKeyUp.bind(this),
    };

    const { value } = this.state;
    const v2 = { id: 'two', value };
    const v3 = { id: 'three', value };

    return (
      <div>
        <input {...props} />
        <OutputBox {...v2} />
        <OutputBox {...v3} />
      </div>
    );
  }
}

export default MomWinApp;
