type propsCode = {
  code: string;
};

type propsItem = {
  title: string;
  question: string;
  codes: propsCode[];
};

type Props = {
  test: propsItem[];
};

export const Test = ({test}: Props) => {
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
        <p className="font-bold text-white text-center bg-gray-600 rounded w-32 md:mt-10">{item.title}</p>
        <p className="text-sm text-gray-600 my-2 md:text-md">{item.question}</p>
        <div className="mockup-code">{rendered}</div>
      </div>
    );
  });
};
