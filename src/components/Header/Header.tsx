import React from 'react';
import Styled from './styles';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Styled.Header>Header component</Styled.Header>
  );
};
export default Header;
