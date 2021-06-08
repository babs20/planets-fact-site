import styled from 'styled-components';

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

const SiteName = styled.h1`
  ${props => props.theme.main.typography['text-h2']}
  font-size: 28px;
  line-height: 36px;
  color: ${props => props.theme.main.colors.mainText};
`;

const PlanetCircle = styled.div<{ bgColor: string }>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 24px;
`;

const Menu = styled.ul`
  padding: 24px 24px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: ${props => props.theme.main.fonts.spartan};
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36px;
  text-transform: uppercase;
  color: ${props => props.theme.main.colors.mainText};
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }
`;

const PlanetNameContainer = styled.div`
  display: flex;
`;

const ChevronContainer = styled.svg`
  margin-right: 8px;
`;

const HamburgerIcon = (): JSX.Element => {
  return (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect x='6' y='9.5' width='24' height='3' fill='white' />
      <rect x='6' y='16.5' width='24' height='3' fill='white' />
      <rect x='6' y='23.5' width='24' height='3' fill='white' />
    </svg>
  );
};

const Chevron = (): JSX.Element => {
  return (
    <ChevronContainer xmlns='http://www.w3.org/2000/svg' width='6' height='8'>
      <path fill='none' stroke='#FFF' opacity='.4' d='M1 0l4 4-4 4' />
    </ChevronContainer>
  );
};

export default function Header(): JSX.Element {
  return (
    <header>
      <Navigation>
        <SiteName>THE PLANETS</SiteName>
        <HamburgerIcon />
      </Navigation>
      <Menu>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#DEF4FC'} />
            Mercury
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#F7CC7F'} />
            Venus
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#545BFE'} />
            Earth
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#FF6A45'} />
            Mars
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#ECAD7A'} />
            Jupiter
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#FCCB6B'} />
            Saturn
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#65F0D5'} />
            Uranus
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
        <MenuItem>
          <PlanetNameContainer>
            <PlanetCircle bgColor={'#497EFA'} />
            Neptune
          </PlanetNameContainer>
          <Chevron />
        </MenuItem>
      </Menu>
    </header>
  );
}
