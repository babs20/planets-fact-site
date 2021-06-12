import styled from 'styled-components';
import device from '../styles/breakpoints';

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
  }
`;

const Section = styled.li<{ sectionId: number }>`
  text-align: center;
  opacity: 0.5;
  &:nth-child(${props => props.sectionId}) {
    opacity: 1;
    border-bottom: 4px solid ${props => props.theme.main.colors.mercury};
  }

  @media ${device.tablet} {
    width: 280px;
    border: 1px solid #fff;

    &:not(:first-child) {
      margin-top: 24px;
    }

    &:nth-child(${props => props.sectionId}) {
      opacity: 1;
      border: 1px solid transparent;
      background-color: ${props => props.theme.main.colors.mercury};
    }
  }
`;

const LongSectionName = styled.button`
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

    span:first-child {
      margin-right: 16px;
      opacity: 0.5;
    }
  }
`;

const MenuButton = styled.button`
  ${props => props.theme.main.typography['text-h3']};
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.9px;
  color: ${props => props.theme.main.colors.mainText};
  background-color: transparent;
  padding: 20px 0;
  width: 80px;

  @media ${device.tablet} {
    display: none;
  }
`;

export const SectionMenu = ({
  sectionName,
  setSection,
}: {
  sectionName: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
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
        >
          <LongSectionName onClick={() => setSection('overview')}>
            <span>01</span>
            <span>Overview</span>
          </LongSectionName>
          <MenuButton onClick={() => setSection('overview')}>
            Overview
          </MenuButton>
        </Section>
        <Section
          sectionId={sectionTitles[sectionName as keyof SectionTitlesType]}
        >
          <LongSectionName onClick={() => setSection('structure')}>
            <span>02</span>
            <span>Internal Structure</span>
          </LongSectionName>
          <MenuButton onClick={() => setSection('structure')}>
            Structure
          </MenuButton>
        </Section>
        <Section
          sectionId={sectionTitles[sectionName as keyof SectionTitlesType]}
        >
          <LongSectionName onClick={() => setSection('geology')}>
            <span>03</span>
            <span>Surface Geology</span>
          </LongSectionName>
          <MenuButton onClick={() => setSection('geology')}>Surface</MenuButton>
        </Section>
      </Menu>
    </nav>
  );
};

export default SectionMenu;
