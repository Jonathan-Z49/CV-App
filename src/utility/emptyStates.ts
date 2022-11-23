import uniqid from 'uniqid';

export const emptyPersonal: Personal = {
  first_name: '',
  last_name: '',
  address: '',
  email: '',
  phone: '',
};

export const emptyWork: WorkExperience[] = [
  {
    id: uniqid(),
    position: '',
    company: '',
    started: '',
    ended: '',
    description: '',
  },
];

export const emptyEducation: Education[] = [
  {
    id: uniqid(),
    school: '',
    degree: '',
    major: '',
    graduation: '',
    location: '',
    GPA: '',
  },
];
