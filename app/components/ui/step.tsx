type Props = {
  length: number;
  target: number;
};

export const Step = ({length, target}: Props) => {
  const targetNum = '🔥';
  const prev = '✔';
  const next = '?';

  const statusSymbol = (num: number) => {
    if (num === target) {
      return targetNum;
    } else if (num < target) {
      return prev;
    } else {
      return next;
    }
  };

  const statusColor = (num: number) => {
    if (num === target) {
      return 'step-secondary';
    } else if (num < target) {
      return '';
    } else {
      return 'step-neutral';
    }
  };

  const list = () => {
    const items = [];
    for (let i = 0; i < length; i++) {
      const symbol = statusSymbol(i);
      const color = statusColor(i);
      items.push(
        <li key={i} data-content={symbol} className={`step ${color}`}>
          {i + 1}
        </li>
      );
    }
    return items;
  };
  return <ul className="steps scale-80 w-auto">{list()}</ul>;
};
