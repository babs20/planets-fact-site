import Header from '../components/Header';
import SectionMenu from '../components/SectionMenu';
import Planet from '../components/Planet';
import Information from '../components/Information';
import Facts from '../components/Facts';
import styled from 'styled-components';
import data from '../data/data.json';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import device from '../styles/breakpoints';

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

type PlanetType = {
  overview: {
    content: string;
    source: string;
  };
};

const PlanetContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content;
    padding: 0 40px 36px 40px;

    #planet {
      grid-column: 1/3;
      grid-row: 1;
    }
    #facts {
      grid-column: 1/3;
      grid-row: 3;
    }
  }

  @media ${device.desktop} {
    #planet {
      grid-column: 1;
      grid-row: 1/3;
    }
  }
`;

const MobileSectionContainer = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`;

const TabletSectionContainer = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
`;

export default function Home({ data }: PropTypes) {
  const [planetPage, setPlanetPage] = useState<number>(0);
  const [section, setSection] = useState<string>('overview');

  return (
    <>
      <Header setPlanetPage={setPlanetPage} planetPage={planetPage} />
      <main>
        <MobileSectionContainer>
          <SectionMenu
            sectionName={section}
            setSection={setSection}
            planetName={data[planetPage].name}
          />
        </MobileSectionContainer>
        <PlanetContainer>
          <Planet
            planetImageUrl={data[planetPage].images}
            planetName={data[planetPage].name}
            sectionName={section}
          />
          <Information
            section={data[planetPage][section as keyof PlanetType]}
            name={data[planetPage].name}
          />
          <TabletSectionContainer>
            <SectionMenu
              sectionName={section}
              setSection={setSection}
              planetName={data[planetPage].name}
            />
          </TabletSectionContainer>
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
