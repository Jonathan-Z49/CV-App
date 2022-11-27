import '../css/App.scss';

import React, { useState } from 'react';
import uniqid from 'uniqid';

import {
  emptyEducation,
  emptyPersonal,
  emptySkills,
  emptyWork,
} from '../utility/emptyStates';
import SectionInput from './SectionInput';
import ViewCV from './ViewCV';

const App = () => {
  const [personal, setPersonal] = useState<Personal>(emptyPersonal);
  const [work, setWork] = useState<WorkExperience[]>(emptyWork);
  const [education, setEducation] = useState<Education[]>(emptyEducation);
  const [skills, setSkills] = useState<Skills[]>(emptySkills);

  const handleChangePersonal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonal((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeWork = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWork((current) =>
      current.map((obj) => {
        if (e.target.getAttribute('data-uniqid') === obj.id) {
          return { ...obj, [e.target.name]: e.target.value };
        }
        return obj;
      }),
    );
  };

  const handleChangeEducation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducation((current) =>
      current.map((obj) => {
        if (e.target.getAttribute('data-uniqid') === obj.id) {
          return { ...obj, [e.target.name]: e.target.value };
        }
        return obj;
      }),
    );
  };

  const handleChangeSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkills((current) =>
      current.map((obj) => {
        if (e.target.getAttribute('data-uniqid') === obj.id) {
          return { ...obj, [e.target.name]: e.target.value };
        }
        return obj;
      }),
    );
  };

  const handleDeleteWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    setWork(work.filter((item) => item.id !== e.currentTarget.getAttribute('data-id')));
  };

  const handleDeleteEducation = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEducation(
      education.filter((item) => item.id !== e.currentTarget.getAttribute('data-id')),
    );
  };

  const handleDeleteSkills = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSkills(
      skills.filter((item) => item.id !== e.currentTarget.getAttribute('data-id')),
    );
  };

  const handleAddWork = () => {
    setWork(work.concat({ ...emptyWork[0], id: uniqid() }));
  };

  const handleAddEducation = () => {
    setEducation(education.concat({ ...emptyEducation[0], id: uniqid() }));
  };

  const handleAddSkills = () => {
    setSkills(skills.concat({ ...emptySkills[0], id: uniqid() }));
  };

  return (
    <div className="content">
      <SectionInput
        personal={personal}
        work={work}
        education={education}
        skills={skills}
        changePersonal={handleChangePersonal}
        changeWork={handleChangeWork}
        changeEducation={handleChangeEducation}
        changeSkills={handleChangeSkills}
        deleteWork={handleDeleteWork}
        deleteEducation={handleDeleteEducation}
        deleteSkills={handleDeleteSkills}
        addWork={handleAddWork}
        addEducation={handleAddEducation}
        addSkills={handleAddSkills}
      />
      <ViewCV
        personalInfo={personal}
        workInfo={work}
        educationInfo={education}
        skillsInfo={skills}
      />
    </div>
  );
};

export default App;
