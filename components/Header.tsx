import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';
import device from '../styles/breakpoints';

type ColorsType = {
  mainText: string;
  'blue-900': string;
  'blue-500': string;
  'blue-100': string;
  mercury: string;
  venus: string;
  earth: string;
  mars: string;
  jupiter: string;
  saturn: string;
  neptune: string;
  uranus: string;
};

const TopNavContainer = styled.header`
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    height: 85px;
    padding: 0 32px;
  }
`;

const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  @media ${device.desktop} {
    height: 100%;
  }

  @media ${device.tablet} {
    justify-content: center;
    padding: 32px 0 0 0;
    border: none;
  }

  @media ${device.laptop} {
    padding: 0;
  }
`;

const SiteName = styled.span`
  ${props => props.theme.main.typography['text-h2']}
  font-size: 28px;
  line-height: 36px;
  color: ${props => props.theme.main.colors.mainText};
  white-space: nowrap;

  @media ${device.desktop} {
    height: 100%;
    padding: 22px 0 27px 0;
  }
`;

const HamburgerIconContainer = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media ${device.tablet} {
    display: none;
  }
`;

const Menu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 24px 24px;
  background-color: ${props => props.theme.main.colors['blue-900']};

  @media ${device.tablet} {
    display: flex;
    position: static;
    padding: 40px 40px 28px 40px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    align-items: center;
    justify-content: space-between;
    height: unset;
  }

  @media ${device.laptop} {
    border-bottom: none;
    padding: 0;
    height: 100%;
    justify-content: flex-end;
  }
`;

const MenuItem = styled.li`
  position: relative;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  @media ${device.tablet} {
    &:not(:last-child) {
      border-bottom: none;
    }
    width: min-content;
  }

  @media ${device.laptop} {
    height: 100%;

    &:not(:first-child) {
      margin-left: 32px;
    }
  }
`;

const MenuButton = styled.button<{ isSelected: boolean; planetName: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  font-family: ${props => props.theme.main.fonts.spartan};
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36px;
  text-transform: uppercase;
  color: ${props => props.theme.main.colors.mainText};
  padding: 20px 0;
  width: 100%;
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 11px;
    letter-spacing: 1px;
    width: min-content;
    padding: 0 8px;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  }

  @media ${device.laptop} {
    padding: 33px 0 27px 0;
    height: 100%;
    width: 100%;

    &:hover {
      opacity: 1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 4px;
    }

    ${({ isSelected, theme, planetName }) =>
      isSelected &&
      css`
        &:before {
          content: '';
          position: absolute;
          top: 0;
          height: 4px;
          width: 100%;
          background-color: ${theme.main.colors[
            planetName as keyof ColorsType
          ]};
          transition: width 300ms ease-out;
        }
      `}
  }
`;

const PlanetNameContainer = styled.span`
  display: flex;

  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
  }
`;

const PlanetCircle = styled.span<{ bgColor: string }>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 24px;

  @media ${device.tablet} {
    display: none;
  }
`;

const ChevronContainer = styled.svg`
  margin-right: 8px;

  @media ${device.tablet} {
    display: none;
  }
`;

const HamburgerIcon = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}): JSX.Element => {
  return (
    <HamburgerIconContainer
      title='Planet Menu'
      onClick={() => {
        setIsOpen(!isOpen);
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <svg
        width='36'
        height='36'
        viewBox='0 0 36 36'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Planet Menu Icon</title>
        <rect x='6' y='9.5' width='24' height='3' fill='white' />
        <rect x='6' y='16.5' width='24' height='3' fill='white' />
        <rect x='6' y='23.5' width='24' height='3' fill='white' />
      </svg>
    </HamburgerIconContainer>
  );
};

const Chevron = (): JSX.Element => {
  return (
    <ChevronContainer
      xmlns='http://www.w3.org/2000/svg'
      width='6'
      height='8'
      aria-hidden='true'
    >
      <path fill='none' stroke='#FFF' opacity='.4' d='M1 0l4 4-4 4' />
    </ChevronContainer>
  );
};

export default function Header({
  setPlanetPage,
  planetPage,
}: {
  setPlanetPage: React.Dispatch<React.SetStateAction<number>>;
  planetPage: number;
}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      });
    } else {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', e => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      });
    }

    return () => {
      document.removeEventListener('keydown', e => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      });
    };
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
    <TopNavContainer>
      <Navigation>
        <SiteName>THE PLANETS</SiteName>
        <HamburgerIcon setIsOpen={setIsOpen} isOpen={isOpen} />
      </Navigation>
      <Menu isOpen={isOpen}>
        {planets.map((planet, index) => {
          return (
            <MenuItem key={planet.name}>
              <MenuButton
                isSelected={planet.name === planets[planetPage].name}
                planetName={planet.name.toLowerCase()}
                onClick={() => {
                  setPlanetPage(index);
                  setIsOpen(false);
                }}
              >
                <PlanetNameContainer>
                  <PlanetCircle bgColor={planet.color} />
                  {planet.name}
                </PlanetNameContainer>
                <Chevron />
              </MenuButton>
            </MenuItem>
          );
        })}
      </Menu>
    </TopNavContainer>
  );
}
