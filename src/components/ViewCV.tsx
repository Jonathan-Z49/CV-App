import html2pdf from 'html2pdf.js';
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
  const handleClickDownload = () => {
    const element = document.querySelector('.cv-content');
    const opt = {
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf(element, opt);
  };

  return (
    <div className="cv">
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
      <button className="download-pdf" onClick={handleClickDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default ViewCV;
