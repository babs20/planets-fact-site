import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Navigation = styled.div`
  position: relative;
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

const Menu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  padding: 24px 24px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: ${props => props.theme.main.colors['blue-900']};
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

const HamburgerIcon = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}): JSX.Element => {
  return (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={() => setIsOpen(!isOpen)}
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  const planets = [
    {
      name: 'Mercury',
      color: '#DEF4FC',
    },
    {
      name: 'Venus',
      color: '#F7CC7F',
    },
    {
      name: 'Earth',
      color: '#545BFE',
    },
    {
      name: 'Mars',
      color: '#FF6A45',
    },
    {
      name: 'Jupiter',
      color: '#ECAD7A',
    },
    {
      name: 'Saturn',
      color: '#FCCB6B',
    },
    {
      name: 'Uranus',
      color: '#65F0D5',
    },
    {
      name: 'Neptune',
      color: '#497EFA',
    },
  ];

  return (
    <header>
      <Navigation>
        <SiteName>THE PLANETS</SiteName>
        <HamburgerIcon setIsOpen={setIsOpen} isOpen={isOpen} />
      </Navigation>
      <Menu isOpen={isOpen}>
        {planets.map(planet => {
          return (
            <MenuItem key={planet.name}>
              <PlanetNameContainer>
                <PlanetCircle bgColor={planet.color} />
                {planet.name}
              </PlanetNameContainer>
              <Chevron />
            </MenuItem>
          );
        })}
      </Menu>
    </header>
  );
}
