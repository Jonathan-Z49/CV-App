import React from 'react';

import InputText from './InputText';
import SectionChild from './SectionChild';

interface Props {
  personalProp: Personal;
  workProp: WorkExperience[];
  eduProp: Education[];
  changePersonal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeWork: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SectionInput = (props: Props) => {
  const personalInput = [];
  for (const [key, value] of Object.entries(props.personalProp)) {
    personalInput.push(
      <InputText value={value} name={key} key={key} change={props.changePersonal} />,
    );
  }

  return (
    <div>
      <section className="Personal">{personalInput}</section>
      <section className="Work">
        <SectionChild
          objArray={props.workProp}
          changeWork={props.changeWork}
          changeEducation={props.changeEducation}
        />
      </section>
      <section className="Education">
        <SectionChild
          objArray={props.eduProp}
          changeWork={props.changeWork}
          changeEducation={props.changeEducation}
        />
      </section>
    </div>
  );
};

export default SectionInput;
