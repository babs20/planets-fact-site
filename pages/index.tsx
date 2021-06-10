import Header from '../components/Header';
import SectionMenu from '../components/SectionMenu';
import Planet from '../components/Planet';
import Information from '../components/Information';
import Facts from '../components/Facts';
import styled from 'styled-components';
import data from '../data/data.json';
import { GetStaticProps } from 'next';
import { useState } from 'react';

interface PropTypes {
  data: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  }[];
}

const PlanetContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;
`;

export default function Home({ data }: PropTypes) {
  const [planetPage, setPlanetPage] = useState<number>(0);

  return (
    <>
      <Header setPlanetPage={setPlanetPage} />
      <main>
        <SectionMenu />
        <PlanetContainer>
          <Planet planetImageUrl={data[planetPage].images.planet} />
          <Information
            content={data[planetPage].overview.content}
            source={data[planetPage].overview.source}
            name={data[planetPage].name}
          />
          <Facts
            rotation={data[planetPage].rotation}
            revolution={data[planetPage].revolution}
            radius={data[planetPage].radius}
            temperature={data[planetPage].temperature}
          />
        </PlanetContainer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: data,
    },
  };
};
