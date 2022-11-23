import React from 'react';

import InputText from './InputText';
import SectionChild from './SectionChild';

interface Props {
  personal: Personal;
  work: WorkExperience[];
  education: Education[];
  changePersonal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeWork: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteWork: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteEducation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  addWork: () => void;
  addEducation: () => void;
}

const SectionInput = (props: Props) => {
  const personalInput = [];
  for (const [key, value] of Object.entries(props.personal)) {
    personalInput.push(
      <InputText value={value} name={key} key={key} change={props.changePersonal} />,
    );
  }

  return (
    <>
      <section className="personal">{personalInput}</section>
      <section className="work">
        <SectionChild
          objArray={props.work}
          changeWork={props.changeWork}
          changeEducation={props.changeEducation}
          onDeleteWork={props.deleteWork}
          onDeleteEducation={props.deleteEducation}
        />
        <button onClick={props.addWork}>Add</button>
      </section>
      <section className="education">
        <SectionChild
          objArray={props.education}
          changeWork={props.changeWork}
          changeEducation={props.changeEducation}
          onDeleteWork={props.deleteWork}
          onDeleteEducation={props.deleteEducation}
        />
        <button onClick={props.addEducation}>Add</button>
      </section>
    </>
  );
};

export default SectionInput;
