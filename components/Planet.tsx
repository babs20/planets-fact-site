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

  @media ${device.tabletL} {
    ${({ theme, planetName }) =>
      theme.main.planetDimensions[planetName as keyof PlanetObjType].desktop}
  }
`;

const PlanetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 304px;
  width: 100%;
`;

export const Planet = ({
  planetImageUrl,
  planetName,
}: {
  planetImageUrl: string;
  planetName: string;
}): JSX.Element => {
  return (
    <PlanetContainer>
      <PlanetImage
        planetImageUrl={planetImageUrl}
        planetName={planetName.toLowerCase()}
      />
    </PlanetContainer>
  );
};
export default Planet;
