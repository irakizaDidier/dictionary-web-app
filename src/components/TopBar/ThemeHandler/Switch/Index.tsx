import React from 'react';
import './Switch.css';

interface SwitchProps {
  dark: boolean;
}

const Index: React.FC<SwitchProps> = ({ dark }) => {
  return (
    <span className="switch">
      <span className={`switch__track ${dark ? 'dark' : ''}`}>
        <span className="switch__ball"></span>
      </span>
    </span>
  );
};

export default Index;
