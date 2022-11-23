import React, { useState } from 'react';

import placeholders from '../utility/placeholders';

const InputText = (props: {
  value: string;
  name: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [state, setState] = useState(props.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    props.change(e);
  };

  return (
    <input
      type="text"
      placeholder={placeholders.get(props.name)}
      onChange={handleChange}
      value={state}
      name={props.name}
    />
  );
};

export default InputText;
