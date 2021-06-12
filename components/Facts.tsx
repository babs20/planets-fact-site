import styled from 'styled-components';
import device from '../styles/breakpoints';

const FactSection = styled.dl`
  color: ${props => props.theme.main.colors.mainText};
  width: 100%;
  margin-bottom: 47px;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    margin: 28px 0 0 0;
  }
`;

const DefinitionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 11px 24px;
  margin-bottom: 8px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    min-width: 164px;
    padding: 16px;
    flex-grow: 1;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: 11px;
    }
  }
`;

const Term = styled.dt`
  font-family: ${props => props.theme.main.fonts.spartan};
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.73px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-top: 4px;
`;

const Definition = styled.dd`
  font-family: ${props => props.theme.main.fonts.antonio};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 31px;
    margin-top: 6px;
  }
`;

export const Facts = ({
  rotation,
  revolution,
  radius,
  temperature,
}: {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}): JSX.Element => {
  return (
    <FactSection id='facts'>
      <DefinitionContainer>
        <Term>Rotation Time</Term>
        <Definition>{rotation}</Definition>
      </DefinitionContainer>
      <DefinitionContainer>
        <Term>Revolution Time</Term>
        <Definition>{revolution}</Definition>
      </DefinitionContainer>
      <DefinitionContainer>
        <Term>Radius</Term>
        <Definition>{radius}</Definition>
      </DefinitionContainer>
      <DefinitionContainer>
        <Term>Average Temp.</Term>
        <Definition>{temperature}</Definition>
      </DefinitionContainer>
    </FactSection>
  );
};
export default Facts;
