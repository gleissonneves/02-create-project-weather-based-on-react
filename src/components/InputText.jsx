import React from 'react';

const styleInput = {
  border: 'none',
  borderRadius: '20px',
  width: '250px',
  height: '40px',
  padding: '4px 16px',
};

const styleInputText = {
  ...styleInput,
};

const InputText = function inputText() {
  return <input type="texto" style={styleInputText} />;
};

export default InputText;
