import React, { Component } from 'react';
import {
  GlobalStyle,
  Btn,
  Box,
  Text,
  Image,
} from './Tile';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Box
          w={270}
          background={"gray3"}
          center
          r={3}
          mt={4}
          p={3}
          textAlign={"center"}
        >
          <Image w={100} r={3} src="https://pbs.twimg.com/profile_images/659824786260934656/syJKampr_400x400.jpg"/>
          <Text fontSize={3} mt={2} fontWeight={2}>Philip Davis</Text>
          <Text o={0.4} mb={2} mt={1}>@philipcdavis</Text>
          <Box>
            <Btn size="sm" color="gray2">Twitter</Btn>
            <Btn size="sm" color="green">Website</Btn>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
