import styled from 'styled-components';

const PlanetImage = styled.div<{ planetImageUrl: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${({ planetImageUrl }) => planetImageUrl});
  background-repeat: no-repeat;
  background-position: center;
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
}: {
  planetImageUrl: string;
}): JSX.Element => {
  return (
    <PlanetContainer>
      <PlanetImage planetImageUrl={planetImageUrl} />
    </PlanetContainer>
  );
};
export default Planet;
