import React from 'react';

import InputText from './InputText';
import SectionChild from './SectionChild';

interface Props {
  personal: Personal;
  work: WorkExperience[];
  education: Education[];
  skills: Skills[];
  changePersonal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeWork: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEducation: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeSkills: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteWork: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteEducation: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteSkills: (e: React.MouseEvent<HTMLButtonElement>) => void;
  addWork: () => void;
  addEducation: () => void;
  addSkills: () => void;
}

const SectionInput = (props: Props) => {
  const personalInput = [];
  for (const [key, value] of Object.entries(props.personal)) {
    personalInput.push(
      <InputText value={value} name={key} key={key} change={props.changePersonal} />,
    );
  }

  const inputs = [props.education, props.work, props.skills];
  const childInputs = inputs.map((item, index) => {
    return (
      <SectionChild
        key={index}
        objArray={item}
        changeWork={props.changeWork}
        changeEducation={props.changeEducation}
        changeSkills={props.changeSkills}
        onDeleteWork={props.deleteWork}
        onDeleteSkills={props.deleteSkills}
        onDeleteEducation={props.deleteEducation}
      />
    );
  });

  return (
    <div className="input-content">
      <section className="personal">
        <h3>Personal Information</h3>
        {personalInput}
      </section>
      <section className="education">
        <h3 className="education-header">Education</h3>
        {childInputs[0]}
        <button onClick={props.addEducation}>Add</button>
      </section>
      <section className="work">
        <h3 className="work-header">Work Experience</h3>
        {childInputs[1]}
        <button onClick={props.addWork}>Add</button>
      </section>
      <section className="skills">
        <h3 className="skills-header">Skills</h3>
        {childInputs[2]}
        <button onClick={props.addSkills}>Add</button>
      </section>
    </div>
  );
};

export default SectionInput;
