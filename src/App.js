import React, { Component } from 'react';
import Background from './background/Background';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Background />
      </Wrapper>
    );
  }
}

export default App;
