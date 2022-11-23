import '../css/App.scss';

import React, { useState } from 'react';
import uniqid from 'uniqid';

import { emptyEducation, emptyPersonal, emptyWork } from '../utility/emptyStates';
import SectionInput from './SectionInput';

const App = () => {
  const [personal, setPersonal] = useState<Personal>(emptyPersonal);
  const [work, setWork] = useState<WorkExperience[]>(emptyWork);
  const [education, setEducation] = useState<Education[]>(emptyEducation);

  const handleChangePersonal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonal((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeWork = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.getAttribute('data-id'));

    setWork(work.filter((item) => item.id !== e.currentTarget.getAttribute('data-id')));
    console.log(work);
  };

  const handleDeleteEducation = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEducation(
      education.filter((item) => item.id !== e.currentTarget.getAttribute('data-id')),
    );
  };

  const handleAddWork = () => {
    setWork(work.concat({ ...emptyWork[0], id: uniqid() }));
  };

  const handleAddEducation = () => {
    setEducation(education.concat({ ...emptyEducation[0], id: uniqid() }));
  };

  return (
    <div className="content">
      <SectionInput
        personal={personal}
        work={work}
        education={education}
        changePersonal={handleChangePersonal}
        changeWork={handleChangeWork}
        changeEducation={handleChangeEducation}
        deleteWork={handleDeleteWork}
        deleteEducation={handleDeleteEducation}
        addWork={handleAddWork}
        addEducation={handleAddEducation}
      />
    </div>
  );
};

export default App;
