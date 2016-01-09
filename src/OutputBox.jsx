import React from 'react';
/* import Combinatorics from 'js-combinatorics'; */

class OutputBox extends React.Component {
  constructor() {
    super();
    this.state = { N: 0, output: '' };
  }

  componentDidMount() {
    const N = parseInt(this.props.id.split('-')[1], 10);
    console.log('this is output #' + N);
    // this.setState({ N: N });
  }

  updateOutput(value) {
    const v = parseInt(value, 10) || 0;
    // to prevent out of range exception in combination function
    if (v < Math.pow(10, this.state.N - 1)) {
      return this.setState({ output: '' });
    }
    const output = 'WIP';
    /* const cmb = Combinatorics.combination(value.split(''), this.state.N);
       let output = '';
       let a = cmb.next();
       while (a) {
       output += a.join('') + ' ';
       a = cmb.next();
       } */
    this.setState({ output: output.trim() });
  }

  render() {
    // <textarea id={this.props.id} rows="12" valueLink={this.linkState('output')}></textarea>
    return (
      <div>
        <h3>{this.state.N} elements</h3>
        <textarea id={this.props.id} rows="12" defaultValue="WIP"></textarea>
      </div>
    );
  }
}

// OutputBox.mixins = [React.addons.LinkedStateMixin];
OutputBox.propTypes = {
  id: React.PropTypes.string,
};

export default OutputBox;
