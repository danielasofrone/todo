import {ChangeEvent} from 'react';
import './TextInput.scss';

interface TextInputProps {
  value?: string;
  type?: 'text';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const TextInput = ({value, type, onChange}: TextInputProps) => (
  <input
    className="input"
    value={value}
    type={type}
    onChange={(event) => onChange && onChange(event)}
  />
);

export default TextInput;
