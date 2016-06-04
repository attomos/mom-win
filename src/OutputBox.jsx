import React from 'react';
import getCombination from './get-combination.js';

function OutputBox({ id, value }) {
  const n = id === 'two' ? 2 : 3;
  const elements = getCombination(value, n).join(' ');

  return (
    <div>
      <h3>{n} elements</h3>
      <textarea id={id} rows="12" readOnly value={elements}></textarea>
    </div>
  );
}

OutputBox.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default OutputBox;
