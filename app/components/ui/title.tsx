import {memo} from 'react';

type Props = {
  children: React.ReactNode;
};

const TitleComponent = (props: Props) => {
  return <h1 className="text-3xl mt-5 md:text-4xl md:mt-10">{props.children}</h1>;
};

TitleComponent.displayName = 'Title';

export const Title = memo(TitleComponent);
