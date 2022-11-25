import { ChangeEvent } from 'react';
import './Textarea.scss';

interface TextareaProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({ value, onChange, onKeyUp }: TextareaProps) => (
  <textarea
    className="textarea"
    value={value}
    onChange={(event) => onChange && onChange(event)}
    onKeyUp={(event) => onKeyUp && onKeyUp(event)}
  />
);

export default Textarea;
