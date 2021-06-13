import styled, { SimpleInterpolation } from 'styled-components';
import { device } from '../styles/breakpoints';
interface PlanetImageProps {
  planetImageUrl: string;
  planetName: string;
}

type PlanetObjType = {
  mercury: {
    mobile: readonly SimpleInterpolation[];
    desktop: readonly SimpleInterpolation[];
  };
};

const PlanetImage = styled.div<PlanetImageProps>`
  ${({ theme, planetName }) =>
    theme.main.planetDimensions[planetName as keyof PlanetObjType].mobile}
  background-image: url(${({ planetImageUrl }) => planetImageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media ${device.tablet} {
    ${({ theme, planetName }) =>
      theme.main.planetDimensions[planetName as keyof PlanetObjType].tablet}
  }

  @media ${device.laptop} {
    ${({ theme, planetName }) =>
      theme.main.planetDimensions[planetName as keyof PlanetObjType].desktop}
  }
`;

const PlanetContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 304px;
  width: 100%;

  @media ${device.tablet} {
    height: 460px;
  }
  @media ${device.laptop} {
    height: 754px;
    width: 65%;
  }
`;

const HoverIcon = styled.div<{ hoverImageUrl: string; isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: absolute;
  background-image: url(${({ hoverImageUrl }) => hoverImageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 122px;
  bottom: 32px;

  @media ${device.tablet} {
    bottom: 64px;
    width: 125px;
    height: 152px;
  }

  @media ${device.laptop} {
    bottom: 90px;
    width: 163px;
    height: 199px;
  }
`;

export const Planet = ({
  planetImageUrl,
  planetName,
  sectionName,
}: {
  planetImageUrl: {
    planet: string;
    internal: string;
    geology: string;
  };
  planetName: string;
  sectionName: string;
}): JSX.Element => {
  type PlanetUrlType = {
    planet: string;
    internal: string;
    geology: string;
  };

  interface SectionTitlesType {
    overview: string;
    structure: string;
    geology: string;
  }

  const sectionTitles: SectionTitlesType = {
    overview: 'planet',
    structure: 'internal',
    geology: 'planet',
  };

  const section: string = sectionTitles[sectionName as keyof SectionTitlesType];

  return (
    <PlanetContainer id='planet'>
      <PlanetImage
        planetImageUrl={planetImageUrl[section as keyof PlanetUrlType]}
        planetName={planetName.toLowerCase()}
      />
      <HoverIcon
        hoverImageUrl={planetImageUrl.geology}
        isShown={sectionName === 'geology'}
      />
    </PlanetContainer>
  );
};
export default Planet;
