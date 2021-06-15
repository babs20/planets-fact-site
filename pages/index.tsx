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
import Head from 'next/head';
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

const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 24px;

  @media ${device.tablet} {
    padding: 0 40px 36px 40px;
  }

  @media ${device.laptop} {
    padding: 0 64px;
    margin: 0 auto;
  }

  @media ${device.desktop} {
    padding: 0 165px;
    margin: 0 auto;
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

const InfoContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 350px;
  }
`;

const DesktopTopContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default function Home({ data }: PropTypes) {
  const [planetPage, setPlanetPage] = useState<number>(2);
  const [section, setSection] = useState<string>('overview');
  const sectionTitle = section[0].toUpperCase() + section.slice(1);

  return (
    <>
      <Head>
        <title>
          {data[planetPage].name} - {sectionTitle}
        </title>
      </Head>
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
          <DesktopTopContainer>
            <Planet
              planetImageUrl={data[planetPage].images}
              planetName={data[planetPage].name}
              sectionName={section}
            />
            <InfoContainer>
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
            </InfoContainer>
          </DesktopTopContainer>

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
