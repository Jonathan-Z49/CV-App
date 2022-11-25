import React from 'react';

import { isSkill, isWork } from '../utility/typeCheck';
import InputText from './InputText';

interface Props {
  objArray: WorkExperience[] | Education[] | Skills[];
  changeWork: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSkills: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteWork: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteEducation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDeleteSkills: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const SectionChild = (props: Props) => {
  if (props.objArray.length === 0) {
    return null;
  }

  let changeFunc = props.changeEducation;
  let deleteFunc = props.onDeleteEducation;
  let entryID: string;
  let classToUse = 'education';

  if (isWork(props.objArray[0])) {
    classToUse = 'work';
    changeFunc = props.changeWork;
    deleteFunc = props.onDeleteWork;
  }

  if (isSkill(props.objArray[0])) {
    classToUse = 'skill';
    changeFunc = props.changeSkills;
    deleteFunc = props.onDeleteSkills;
  }

  const myInputs = props.objArray.map((entry, index) => {
    return (
      <div key={index} className={`${classToUse}-item`}>
        {Object.entries(entry).map((item) => {
          if (item[0] !== 'id') {
            return (
              <InputText
                value={item[1]}
                name={item[0]}
                key={item[0]}
                id={entryID}
                change={changeFunc}
              />
            );
          } else {
            entryID = item[1];
          }
        })}
        <button data-id={entryID} onClick={deleteFunc}>
          Delete
        </button>
      </div>
    );
  });
  return <>{myInputs}</>;
};

export default SectionChild;
