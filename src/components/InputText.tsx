import React, { useState } from 'react';

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

  return <input type="text" onChange={handleChange} value={state} name={props.name} />;
};

export default InputText;
