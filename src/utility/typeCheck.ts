/* eslint-disable @typescript-eslint/no-explicit-any */
export function isPersonal(object: any): object is Personal {
  return 'first_name' in object;
}
export function isWork(object: any): object is WorkExperience {
  return 'company' in object;
}
export function isEducation(object: any): object is Education {
  return 'school' in object;
}

export function isSkill(object: any): object is Skills {
  return 'skill' in object;
}
