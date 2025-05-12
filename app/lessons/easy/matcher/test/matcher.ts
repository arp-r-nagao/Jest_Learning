export const matcherTest = () => {
  return [
    {
      title: '厳密な等価性',
      question: '「10+20」と「30」が厳密に等しいことをテストしてください。',
      codes: [
        {code: `test('10+20の結果は30',() => {`},
        {code: '  expect(10+20)'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
      answer: '.toBe(30)',
    },
    {
      title: '配列の等価性のテスト',
      question: '次の配列が等しいことをテストしてください。',
      codes: [
        {code: `test('2つの配列は等しい', () => {`},
        {code: '  const array1 = [1, 2, 3, 4];'},
        {code: '  const array2 = [1, 2, 3, 4];'},
        {code: '  expect(array1)'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
      answer: '.toEqual(array2)',
    },
    {
      title: '真偽値のテスト',
      question: 'nameがnullではないことをテストしてください。',
      codes: [
        {code: `test('名前がnullじゃない', () => {`},
        {code: '  const name = "Taro Yamada";'},
        {code: '  expect(name)'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
      answer: '.not.toBeNull()',
    },
    {
      title: '数値のテスト',
      question: '年齢が20歳以上であることをテストしてください。',
      codes: [
        {code: `test('年齢が20歳以上', () => {`},
        {code: '  const age = 25;'},
        {code: '  expect(age)'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
      answer: '.toBeGreaterThanOrEqual(20)',
    },
    {
      title: '文字列のテスト',
      question: 'SOZOに「Z」が入っていることをテストしてください。',
      codes: [
        {code: `test('「Z」が含まれている', () => {`},
        {code: '  expect("SOZO")'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
      answer: '.toMatch(/Z/)',
    },
  ];
};
