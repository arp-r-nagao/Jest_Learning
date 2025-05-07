import {Title} from '../ui/title';

type Props = {
  title: string;
  content: React.ReactNode;
};

export const CurriculumDocument = ({title, content}: Props) => {
  return (
    <div className="document">
      <div className="flex justify-start">
        <Title>{title}</Title>
      </div>
      <div className="mt-5">{content}</div>
    </div>
  );
};
