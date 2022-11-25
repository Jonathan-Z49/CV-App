import { emptyEducation, emptyPersonal, emptySkills, emptyWork } from './emptyStates';

const placeholders: Map<string, string> = new Map();

const emptyStates = [emptyPersonal, emptyWork[0], emptyEducation[0], emptySkills[0]];

emptyStates.forEach((stateObj) => {
  Object.entries(stateObj).forEach((entry) => {
    placeholders.set(entry[0], formatKeyToPlaceholder(entry[0]));
  });
});

function formatKeyToPlaceholder(word: string): string {
  let tempWord = word;
  if (word.includes('_')) {
    tempWord = word.replace('_', ' ');
  }
  return tempWord.charAt(0).toUpperCase() + tempWord.slice(1);
}

export default placeholders;
