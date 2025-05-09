type Props = {
  title: string;
  content: string | React.ReactNode;
  button?: React.ReactNode;
  style?: string;
};

export const Card = ({title, content, button, style}: Props) => {
  const contentsStyle = style ? style : 'text-white';
  return (
    <div className="card bg-neutral text-neutral-content w-72 md:w-96">
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${contentsStyle}`}>{title}</h2>
        <p className={contentsStyle}>{content}</p>
        <div className="card-actions justify-center mt-3">{button}</div>
      </div>
    </div>
  );
};

export const CardSecondary = ({title, content, button, style}: Props) => {
  const contentsStyle = style ? style : 'text-white';
  return (
    <div className="card bg-secondary text-secondary-content w-72 md:w-auto">
      <div className="card-body items-center text-center">
        <h2 className={`card-title ${contentsStyle}`}>{title}</h2>
        <p className={contentsStyle}>{content}</p>
        <div className="card-actions justify-center mt-3">{button}</div>
      </div>
    </div>
  );
};
