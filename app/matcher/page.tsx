import {CurriculumDocument} from '../components/layout/document';
import {Content} from './content';

export default function Matcher() {
  const content = <Content />;
  return (
    <div className="Matcher">
      <CurriculumDocument title="Matcher" content={content} />
    </div>
  );
}
