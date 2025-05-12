type PropsCode = {
  code: string;
};

export type PropsItem = {
  title: string;
  question: string;
  codes: PropsCode[];
  answer: string;
};

type Props = {
  test: PropsItem;
  userAnswer: string;
};

// ユーザーが入力した値が模範解答と一致していればtrueを返す
export const judgment = ({test, userAnswer}: Props) => {
  const answer = test.answer;
  return answer === userAnswer;
};
