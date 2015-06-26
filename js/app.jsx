var Combinatorics = require('js-combinatorics');
var React = require('react/addons');

var MomWinApp = React.createClass({
  handleKeyUp: function(e) {
    var value = document.getElementById('id_input').value;
    this.setState({value: value});
    this.refs.output2.updateOutput(value);
    this.refs.output3.updateOutput(value);
  },
  getInitialState: function() {
    return {value: 0};
  },
  render: function() {
    return (
      <div>
        <input id="id_input" className="input u-full-width" type="text" maxLength="10" autoFocus onChange={this.handleKeyUp} />
        <OutputBox id="output-2" ref="output2" />
        <OutputBox id="output-3" ref="output3" />
      </div>
    );
  }
});

var OutputBox = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  updateOutput: function(value) {
    var data = value
    var v = parseInt(data,  10) || 0;
    // to prevent out of range exception in combination function
    if (v < Math.pow(10, this.state.N - 1)) {
      return this.setState({output: ''});
    }
    var cmb = Combinatorics.combination(data.split(''), this.state.N);
    var output = '';
    var a = cmb.next();
    while(a) {
      output += a.join('') + " ";
      a = cmb.next();
    }
    this.setState({output: output.trim()});
  },
  getInitialState: function() {
    return {N: 0, output: ''};
  },
  componentDidMount: function() {
    var N = parseInt(this.props.id.split('-')[1], 10);
    this.setState({N: N});
  },
  render: function() {
    return (
      <div>
        <h3>{this.state.N} ตัว</h3>
        <textarea id={this.props.id} rows="12" valueLink={this.linkState('output')}></textarea>
      </div>
    );
  }
});

React.render(<MomWinApp />, document.getElementById('id_app'));
