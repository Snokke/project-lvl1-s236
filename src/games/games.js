import { cons } from 'hexlet-pairs';
import playGame from '../index';

const generator = () => {
  const question = '';
  const correctAnswer = '';
  return cons(question, correctAnswer);
};

const brainGames = () => {
  const gameDescription = '';
  playGame(generator, gameDescription);
};

export default brainGames;