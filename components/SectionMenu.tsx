import styled from 'styled-components';

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 50px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

const LongSectionName = styled.button`
  display: none;
`;

const Section = styled.li<{ sectionId: number }>`
  text-align: center;
  opacity: 0.5;
  &:nth-child(${props => props.sectionId}) {
    opacity: 1;
    border-bottom: 4px solid ${props => props.theme.main.colors.mercury};
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

  /* &:focus {
    outline: 1px solid #fff;
  } */
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
          <LongSectionName>
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
          <LongSectionName>
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
          <LongSectionName>
            <span>01</span>
            <span>Surface Geology</span>
          </LongSectionName>
          <MenuButton onClick={() => setSection('geology')}>Surface</MenuButton>
        </Section>
      </Menu>
    </nav>
  );
};

export default SectionMenu;
