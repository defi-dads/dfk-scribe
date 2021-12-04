import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from '../components/Text';
import SideBar from './parts/sidebar/sidebar';

export default function DefaultLayout(props) {
  const [isSidebarOpenParam, setSidebarOpenParam] = useState(true);

  return (
    <Container>
      <SideBar
        isSidebarOpen={isSidebarOpenParam}
        setSidebarOpen={setSidebarOpenParam}
      />
      <Main className="col flex-container scrollable">
        {props.children}
      </Main>
    </Container>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column; 
  width: calc(100% - 150px);
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 600px) {
    color: red;
  }
`;



const Title = styled(Text).attrs({
  fontSize: 15,
})`
  color: ${(props) => props.theme.text};
`;
