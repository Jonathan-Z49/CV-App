/* eslint-disable @typescript-eslint/no-explicit-any */
export function isPersonal(object: any): object is Personal {
  return 'firstName' in object;
}
export function isWork(object: any): object is WorkExperience {
  return 'company' in object;
}
export function isEducation(object: any): object is Education {
  return 'school' in object;
}
