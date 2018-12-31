import React from 'react';
import styled from 'styled-components';

const Line = styled.line`
  stroke: white;
  stroke-width: 3px;
`;

const Test = () => (
  <div>
    <svg>
      <Line
        x1="2%"
        y1="2%"
        x2="3%"
        y2="3%"
      />
    </svg>
  </div>
);

export default Test;
