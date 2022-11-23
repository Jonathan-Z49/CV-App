interface Personal {
  [key: string]: string;
  first_name: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
}

interface WorkExperience {
  [key: string]: string;
  id: string;
  position: string;
  company: string;
  started: string;
  ended: string;
  description: string;
}

interface Education {
  [key: string]: string;
  id: string;
  school: string;
  degree: string;
  major: string;
  graduation: string;
  location: string;
  GPA: string;
}
