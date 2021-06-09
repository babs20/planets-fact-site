import Header from '../components/Header';
import SectionMenu from '../components/SectionMenu';
import Planet from '../components/Planet';
import Information from '../components/Information';
import Facts from '../components/Facts';
import styled from 'styled-components';

const PlanetContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionMenu />
        <PlanetContainer>
          <Planet />
          <Information />
          <Facts />
        </PlanetContainer>
      </main>
    </>
  );
}
