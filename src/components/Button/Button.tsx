import {FC, ReactNode} from 'react';
import './Button.scss'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => 
<button className= 'button' onClick={() => onClick && onClick()}>{children}</button>;

export default Button;