// テストする関数のインポート
import {judgment} from '../../../../../../lib/judgment';

describe('useJudgment', () => {
  let testCase: {
    title: string;
    question: string;
    codes: {code: string}[];
    answer: string;
  };

  beforeEach(() => {
    testCase = {
      title: 'title',
      question: 'question',
      codes: [{code: 'code'}],
      answer: 'abc',
    };
  });

  test('正解を入力した場合は true を返す', () => {
    const userAnswer = 'abc';
    const result = judgment({test: testCase, userAnswer});
    expect(result).toBe(true);
  });

  test('不正解を入力した場合は false を返す', () => {
    const userAnswer = 'xyz';
    const result = judgment({test: testCase, userAnswer});
    expect(result).toBe(false);
  });

  test('空文字を入力した場合は false を返す', () => {
    const userAnswer = '';
    const result = judgment({test: testCase, userAnswer});
    expect(result).toBe(false);
  });
});
