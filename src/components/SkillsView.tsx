import React from 'react';

const SkillsView = (props: { skills: Skills[] }) => {
  const skillItems = props.skills.map((item) => {
    return <li key={item.id}> {item.skill} </li>;
  });

  return (
    <section className="cv-skills">
      <h4 className="cv-skills-title">
        <strong>SKILLS</strong>
      </h4>
      <ul className="cv-skill-list">{skillItems}</ul>
    </section>
  );
};

export default SkillsView;
