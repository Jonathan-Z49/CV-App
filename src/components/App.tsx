import '../css/App.scss';

import React, { useState } from 'react';

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

  return (
    <div className="App">
      <SectionInput
        personalProp={personal}
        workProp={work}
        eduProp={education}
        changePersonal={handleChangePersonal}
        changeWork={handleChangeWork}
        changeEducation={handleChangeEducation}
      />
    </div>
  );
};

export default App;
