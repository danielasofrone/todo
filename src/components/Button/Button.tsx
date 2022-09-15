import {FC, ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children, onClick}) => 
<button onClick={() => onClick && onClick()}>{children}</button>;

export default Button;