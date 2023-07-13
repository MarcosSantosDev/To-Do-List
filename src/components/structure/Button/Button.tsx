import * as React from 'react';

import * as S from './Button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

const Button = ({ children, fullWidth = false, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} fullWidth={fullWidth}>
      {children}
    </S.Button>
  );
};

export default Button;
