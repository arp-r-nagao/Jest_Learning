export const matcherTest = () => {
  const test = [
    {
      title: '厳密な等価性',
      question: '10+20の結果が30であることをテストしてください。',
      codes: [
        {code: `test("10+20の結果は30",() => {`},
        {code: '  expect(10+20)'},
        {code: 'editor'},
        {code: ';'},
        {code: '});'},
      ],
    },
  ];

  return test;
};
