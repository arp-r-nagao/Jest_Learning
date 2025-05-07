import {Button} from '@/app/components/ui/button';
import {Title} from '@/app/components/ui/title';

export default function MatcherTest() {
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

  const data = () => {
    return test.map((item, index) => {
      const codes = item.codes ?? [];
      const rendered = [];

      for (let i = 0; i < codes.length; i++) {
        const code = codes[i];

        if (code.code === 'editor') {
          const prev = codes[i - 1];
          const next = codes[i + 1];

          rendered.push(
            <div key={i} className="flex items-center my-2 .                ">
              {prev && (
                <pre>
                  <code>{prev.code}</code>
                </pre>
              )}
              <div>
                <input type="text" className="input input-accent input-sm text-neutral font-bold" />
              </div>
              {next && (
                <pre>
                  <code>{next.code}</code>
                </pre>
              )}
            </div>
          );

          i += 1;
        } else if (codes[i + 1]?.code === 'editor' && i !== 0) {
          continue;
        } else {
          rendered.push(
            <pre key={i} className="whitespace-pre-wrap">
              <code>{code.code}</code>
            </pre>
          );
        }
      }

      return (
        <div key={index} className="mb-8">
          <p className="font-bold text-white text-center bg-gray-600 w-32">{item.title}</p>
          <p className="text-sm text-gray-600 mb-3">{item.question}</p>
          <div className="mockup-code w-full">{rendered}</div>
        </div>
      );
    });
  };

  return (
    <div className="Matcher_test">
      <div className="max-w-full">
        <h1 className="border-l-8 border-secondary pl-3 bg-neutral text-white px-2 w-3/5">確認テスト</h1>
        <p className="my-5">各問題の要件を満たせるように、適切な記述を入力してください。</p>
        {data()}
      </div>
      <div className="flex justify-end">
        <Button children="判定" />
      </div>
    </div>
  );
}
