import {PropsItem} from '../matcher/test/page';

type Props = {
  test: PropsItem;
  userAnswer: string;
};

export const useJudgment = ({test, userAnswer}: Props) => {
  const answer = test.answer;
  if (userAnswer === answer) {
    return true;
  } else {
    return false;
  }
};
