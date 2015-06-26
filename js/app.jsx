var Combinatorics = require('js-combinatorics');
var React = require('react/addons');

var MomWinApp = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  handleKeyUp: function(e) {
    var input = document.getElementById('id_input');
    var value = input.value;
    var v = parseInt(value, 10) || 0;
    if (v === 0 || v < 10) {
      this.setState({output2: '', output3: ''});
      return;
    }
    var array = value.split('');
    // Get all 2-digit combinations.
    var cmb2 = Combinatorics.combination(array, 2);
    var output2 = '';
    var a = cmb2.next();
    while(a) {
      output2 += a.join('') + " ";
      a = cmb2.next();
    }
    this.setState({output2: output2.trim()});
    if (v < 100) {
      return;
    }
    // Get all 3-digit combinations.
    var cmb3 = Combinatorics.combination(array, 3);
    var output3 = '';
    var b = cmb3.next();
    while(b) {
      output3 += b.join('') + " ";
      b = cmb3.next();
    }
    this.setState({output3: output3.trim()});
  },
  getInitialState: function() {
    return {output2: '', output3: ''};
  },
  render: function() {
    return (
      <div>
      <input id="id_input" className="input u-full-width" type="text" maxLength="10" autoFocus onKeyUp={this.handleKeyUp}/>
      <h3>2 ตัว</h3>
      <textarea className="output-2" rows="15" valueLink={this.linkState('output2')}></textarea>
      <h3>3 ตัว</h3>
      <textarea className="output-3" rows="12" valueLink={this.linkState('output3')}></textarea>
      </div>
    );
  }
});

React.render(<MomWinApp />, document.getElementById('id_app'));
