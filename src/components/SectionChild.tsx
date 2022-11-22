import React from 'react';

import { isWork } from '../utility/typeCheck';
import InputText from './InputText';

interface Props {
  objArray: WorkExperience[] | Education[];
  changeWork: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SectionChild = (props: Props) => {
  let changeFunc = props.changeEducation;

  if (isWork(props.objArray[0])) {
    changeFunc = props.changeWork;
  }

  const myInputs = props.objArray.map((entry, index) => {
    return (
      <div key={index}>
        {Object.entries(entry).map((item) => {
          if (item[0] !== 'id') {
            return (
              <InputText
                value={item[1]}
                name={item[0]}
                key={item[0]}
                change={changeFunc}
              />
            );
          }
        })}
      </div>
    );
  });

  return <>{myInputs}</>;
};

export default SectionChild;
