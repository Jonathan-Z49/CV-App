import React from 'react';

import InputText from './InputText';

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

  const workInputs = props.workProp.map((entry, index) => {
    return (
      <div key={index}>
        {Object.entries(entry).map((item) => {
          if (item[0] !== 'id') {
            return (
              <InputText
                value={item[1]}
                name={item[0]}
                key={item[0]}
                change={props.changeWork}
              />
            );
          }
        })}
      </div>
    );
  });

  const educationInputs = props.eduProp.map((entry) => {
    return Object.entries(entry).map((item) => {
      if (item[0] !== 'id') {
        return (
          <InputText
            value={item[1]}
            name={item[0]}
            key={item[0]}
            change={props.changeEducation}
          />
        );
      }
    });
  });

  console.log(educationInputs);

  return (
    <div>
      <section className="Personal">{personalInput}</section>
      <section className="Work"> {workInputs} </section>
      <section className="Education"> {educationInputs} </section>
    </div>
  );
};

export default SectionInput;
