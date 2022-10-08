import { useState } from 'react';
import { useToggle } from './Hooks';
import {
  Avatar,
  Container,
  Text
} from '@mantine/core';
import Playground from './Components/Playground';
import Introduction from './Components/Introduction';
import { useContextHelper } from './Context';
import "./App.scss";

function App() {

  const [started, setStarted] = useToggle();

  const Cash = useContextHelper().Cash;

  return (
    <Container className='container'>

      <Text
        color="blue"
        m={20}
        weight={700}
        style={{
          position: "absolute",
          right: "5%",
          top: "4%",
          fontSize: "2.5vw",
        }}
      >Bank : {Cash}₾
      </Text>

      {
        started ? <Playground /> : <Introduction StartGame={setStarted} />
      }
    </Container>
  )
}

export default App
