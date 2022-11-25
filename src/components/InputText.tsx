import React, { useState } from 'react';

import placeholders from '../utility/placeholders';

const InputText = (props: {
  value: string;
  name: string;
  id?: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.change(e);
  };

  return (
    <input
      placeholder={placeholders.get(props.name)}
      onChange={handleChange}
      value={props.value}
      name={props.name}
      data-uniqid={props.id}
    />
  );
};

export default InputText;
