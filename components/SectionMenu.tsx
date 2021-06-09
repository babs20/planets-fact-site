import styled from 'styled-components';

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;

  ${props => props.theme.main.typography['text-h3']};
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.9px;
  color: ${props => props.theme.main.colors.mainText};
  height: 50px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
`;

const LongSectionName = styled.div`
  display: none;
`;

const Section = styled.li`
  padding: 20px 0;
  width: 80px;
  text-align: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    border-bottom: 4px solid ${props => props.theme.main.colors.mercury};
  }
`;

export const SectionMenu = (): JSX.Element => {
  return (
    <nav>
      <Menu>
        <Section>
          <LongSectionName>
            <span>01</span>
            <span>Overview</span>
          </LongSectionName>
          <span>Overview</span>
        </Section>
        <Section>
          <LongSectionName>
            <span>02</span>
            <span>Internal Structure</span>
          </LongSectionName>
          <span>Structure</span>
        </Section>
        <Section>
          <LongSectionName>
            <span>01</span>
            <span>Surface Geology</span>
          </LongSectionName>
          <span>Surface</span>
        </Section>
      </Menu>
    </nav>
  );
};

export default SectionMenu;
