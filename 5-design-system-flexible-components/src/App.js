import React, { Component } from 'react';
import styled from 'styled-components';
import { Btn } from './Styled';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <h3>Button Styles</h3>
          <Btn>Submit</Btn>
          <Btn color="red">Submit</Btn>
          <Btn color="green">Submit</Btn>
          <Btn color="gray2">Submit</Btn>
        </Section>
        <Section>
          <h3>Button Sizes</h3>
          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>
        </Section>
      </div>
    );
  }
}

const Section = styled.section`
  margin: 100px 30px;
`

export default App;
