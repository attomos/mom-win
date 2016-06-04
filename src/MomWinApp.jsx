import React from 'react';
import OutputBox from './OutputBox.jsx';

class MomWinApp extends React.Component {
  constructor() {
    super();
    this.state = { value: '0' };
    this.handleKeyUp = this.handleKeyUp.bind(this);
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
      autoFocus: 'true',
      maxLength: 10,
      onChange: this.handleKeyUp,
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
