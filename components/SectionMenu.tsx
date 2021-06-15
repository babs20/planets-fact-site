import styled, { css } from 'styled-components';
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

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 50px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);

  @media ${device.tablet} {
    flex-direction: column;
    border: none;
    height: max-content;
    padding: 0;
    align-items: flex-end;
    margin-left: 70px;
  }

  @media ${device.laptop} {
    margin: 40px 0 0 0;
  }
`;

const Section = styled.li<{
  sectionId: number;
  planetName: string;
  isSelected: boolean;
}>`
  position: relative;
  text-align: center;
  opacity: 0.5;

  transition: background-color 200ms ease-out;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 4px;
  }

  ${({ isSelected, theme, planetName }) =>
    isSelected &&
    css`
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${theme.main.colors[planetName as keyof ColorsType]};
        transition: width 300ms ease-out;
      }
      opacity: 1;
    `}

  @media ${device.tablet} {
    width: 280px;
    border: 1px solid #fff;

    &:before {
      all: unset;
    }

    &:not(:first-child) {
      margin-top: 24px;
    }

    &:nth-child(${props => props.sectionId}) {
      opacity: 1;
      border: 1px solid transparent;
      background-color: ${({ theme, planetName }) =>
        theme.main.colors[planetName as keyof ColorsType]};
    }
  }

  @media ${device.laptop} {
    width: 350px;
    ${({ isSelected }) =>
      !isSelected &&
      css`
        &:hover {
          background: hsla(0, 0%, 85%, 0.2);
          opacity: 1;
          border: 1px solid transparent;
        }
      `}
  }
`;

const LargeMenuButton = styled.button`
  display: none;

  @media ${device.tablet} {
    display: block;
    ${props => props.theme.main.typography['text-h3']};
    font-size: 9px;
    line-height: 25px;
    letter-spacing: 1.9px;
    color: ${props => props.theme.main.colors.mainText};
    background-color: transparent;
    padding: 8px 0 8px 20px;
    width: 100%;
    text-align: start;
    cursor: pointer;

    span:first-child {
      margin-right: 16px;
      opacity: 0.5;
    }

    &:focus {
      outline-offset: 3px;
    }
  }

  @media ${device.laptop} {
    font-size: 12px;
    letter-spacing: 2.57px;
  }
`;

const MobileMenuButton = styled.button`
  ${props => props.theme.main.typography['text-h3']};
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.9px;
  color: ${props => props.theme.main.colors.mainText};
  background-color: transparent;
  padding: 20px 0;
  width: 80px;
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const SectionMenu = ({
  sectionName,
  setSection,
  planetName,
}: {
  sectionName: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
  planetName: string;
}): JSX.Element => {
  interface SectionTitlesType {
    overview: number;
    structure: number;
    geology: number;
  }

  const sectionTitles: SectionTitlesType = {
    overview: 1,
    structure: 2,
    geology: 3,
  };

  return (
    <nav>
      <Menu>
        <Section
          sectionId={sectionTitles[sectionName as keyof SectionTitlesType]}
          planetName={planetName.toLowerCase()}
          isSelected={sectionName === 'overview'}
        >
          <LargeMenuButton onClick={() => setSection('overview')}>
            <span>01</span>
            <span>Overview</span>
          </LargeMenuButton>
          <MobileMenuButton onClick={() => setSection('overview')}>
            Overview
          </MobileMenuButton>
        </Section>
        <Section
          sectionId={sectionTitles[sectionName as keyof SectionTitlesType]}
          planetName={planetName.toLowerCase()}
          isSelected={sectionName === 'structure'}
        >
          <LargeMenuButton onClick={() => setSection('structure')}>
            <span>02</span>
            <span>Internal Structure</span>
          </LargeMenuButton>
          <MobileMenuButton onClick={() => setSection('structure')}>
            Structure
          </MobileMenuButton>
        </Section>
        <Section
          sectionId={sectionTitles[sectionName as keyof SectionTitlesType]}
          planetName={planetName.toLowerCase()}
          isSelected={sectionName === 'geology'}
        >
          <LargeMenuButton onClick={() => setSection('geology')}>
            <span>03</span>
            <span>Surface Geology</span>
          </LargeMenuButton>
          <MobileMenuButton onClick={() => setSection('geology')}>
            Surface
          </MobileMenuButton>
        </Section>
      </Menu>
    </nav>
  );
};

export default SectionMenu;
