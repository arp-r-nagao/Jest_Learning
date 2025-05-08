import {PropsItem} from './page';

type Props = {
  test: PropsItem;
  userAnswer: string;
};

// ユーザーが入力した値が模範解答と一致していればtrueを返す
// 一致していなければfalseを返す
export const judgment = ({test, userAnswer}: Props) => {
  const answer = test.answer;
  if (userAnswer === answer) {
    return true;
  } else {
    return false;
  }
};
