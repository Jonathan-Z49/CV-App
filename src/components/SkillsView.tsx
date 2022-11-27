import React from 'react';

const SkillsView = (props: { skills: Skills[] }) => {
  const skillItems = props.skills.map((item) => {
    return <li key={item.id}> {item.skill} </li>;
  });

  if (props.skills.length === 0) {
    return null;
  }

  return (
    <section className="cv-skills">
      <h4 className="cv-skills-title">
        <strong>SKILLS</strong>
      </h4>
      <ul className="cv-skill-list">
        {props.skills[0].skill === '' ? null : skillItems}
      </ul>
    </section>
  );
};

export default SkillsView;
