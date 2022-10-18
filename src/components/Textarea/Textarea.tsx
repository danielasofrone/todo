import {ChangeEvent} from 'react';
import './Textarea.scss';

interface TextareaProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({value, onChange}: TextareaProps) => (
  <textarea
    className="textarea"
    value={value}
    onChange={(event) => onChange && onChange(event)}
  />
);

export default Textarea;
