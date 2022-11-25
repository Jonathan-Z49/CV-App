import React from 'react';

const WorkView = (props: { work: WorkExperience[] }) => {
  const workItems = props.work.map((item) => {
    return (
      <div key={item.id} className="work-item">
        <p className="cv-work-company">
          <strong> {item.company} </strong>
        </p>
        <p className="cv-work-position-date">
          <em>{item.position}</em>
          <strong>{item.started + ' - ' + item.ended}</strong>
        </p>
        <ul className="cv-work-description">
          <li>{item.description}</li>
        </ul>
      </div>
    );
  });
  return (
    <section className="cv-work">
      <h4 className="cv-work-title">
        <strong>PROFESSIONAL EXPERIENCE</strong>
      </h4>
      {workItems}
    </section>
  );
};

export default WorkView;
