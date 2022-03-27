import React from 'react';

const styleGap = {
  padding: '50px',
};

const Wrapper = function wrapper({ children }) {
  return <main style={styleGap}>{children}</main>;
};

export default Wrapper;
