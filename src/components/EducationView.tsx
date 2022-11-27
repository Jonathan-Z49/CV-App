import React from 'react';

const EducationView = (props: { edu: Education[] }) => {
  const educationItems = props.edu.map((item) => {
    return (
      <div key={item.id} className="edu-item">
        <p className="cv-education-school">
          <strong>
            {item.school}
            <span className="cv-education-date"> {item.location} </span>
          </strong>
        </p>
        <p className="cv-education-details">
          <em> {item.degree + ' in ' + item.major}</em>
          <strong className="cv-education-location"> {item.graduation}</strong>
        </p>
        <ul className="cv-education-gpa">
          <li>GPA: {item.GPA}</li>
        </ul>
      </div>
    );
  });

  if (props.edu.length === 0) {
    return null;
  }

  return (
    <section className="cv-education">
      <h4 className="cv-education-title">
        <strong>EDUCATION</strong>
      </h4>
      {props.edu[0].school === '' ? null : educationItems}
    </section>
  );
};

export default EducationView;
