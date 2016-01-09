import React from 'react';
import OutputBox from './OutputBox.jsx';

class MomWinApp extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  handlerKeyUp() {
    const value = document.getElementById('input').value;
    this.setState({ value: value });
    // FIXME: https://gist.github.com/jimfb/4faa6cbfb1ef476bd105
    this.refs.output2.updateOutput(value);
    this.refs.output3.updateOutput(value);
  }

  render() {
    return (
      <div>
        <input id="input" className="input u-full-width" type="text" maxLength="10" autoFocus onChange={this.handleKeyUp} />
        <OutputBox id="output-2" ref="output2" />
        <OutputBox id="output-3" ref="output3" />
      </div>
    );
  }
}

export default MomWinApp;
