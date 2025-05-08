// テストする関数のインポート
import {judgment} from '../judgment';

describe('useJudgment', () => {
  test('正解を入力した場合は true を返す', () => {
    const test = {
      title: 'title',
      question: 'question',
      codes: [{code: 'code'}],
      answer: 'abc',
    };
    const userAnswer = 'abc';
    const result = judgment({test, userAnswer});
    expect(result).toBe(true);
  });

  test('不正解を入力した場合は false を返す', () => {
    const test = {
      title: 'title',
      question: 'question',
      codes: [{code: 'code'}],
      answer: 'abc',
    };
    const userAnswer = 'xyz';
    const result = judgment({test, userAnswer});
    expect(result).toBe(false);
  });

  test('空文字を入力した場合は false を返す', () => {
    const test = {
      title: 'title',
      question: 'question',
      codes: [{code: 'code'}],
      answer: 'abc',
    };
    const userAnswer = '';
    const result = judgment({test, userAnswer});
    expect(result).toBe(false);
  });
});
