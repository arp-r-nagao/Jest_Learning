import {PropsItem} from './page';

type Props = {
  test: PropsItem;
  userAnswer: string;
};

export const judgment = ({test, userAnswer}: Props) => {
  const answer = test.answer;
  if (userAnswer === answer) {
    return true;
  } else {
    return false;
  }
};
