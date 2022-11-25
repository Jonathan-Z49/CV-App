import React from 'react';

import EducationView from './EducationView';
import SkillsView from './SkillsView';
import WorkView from './WorkView';

interface Props {
  personalInfo: Personal;
  workInfo: WorkExperience[];
  educationInfo: Education[];
  skillsInfo: Skills[];
}

const ViewCV = (props: Props) => {
  return (
    <div className="cv-content">
      <section className="cv-personal">
        <h1 className="cv-personal-name">
          <strong>
            {props.personalInfo.first_name + ' ' + props.personalInfo.last_name}
          </strong>
        </h1>
        <p className="cv-personal-address">{props.personalInfo.address}</p>
        <p className="cv-personal-contact">
          {props.personalInfo.phone + ' | '}
          <a href={'mailto:' + props.personalInfo.email}> {props.personalInfo.email}</a>
        </p>
      </section>
      <EducationView edu={props.educationInfo} />
      <WorkView work={props.workInfo} />
      <SkillsView skills={props.skillsInfo} />
    </div>
  );
};

export default ViewCV;
