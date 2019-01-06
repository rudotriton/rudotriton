import React from 'react';
import styled from 'styled-components';

import Land from './Land';
import Sky from './Sky';
import Text from './Text';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default () => (
  <Wrapper>
    <Sky />
    <Land />
    <Text />
  </Wrapper>
);
