import styled from 'styled-components';

const FactSection = styled.dl`
  color: ${props => props.theme.main.colors.mainText};
  width: 100%;
  margin-bottom: 47px;
`;
const Term = styled.dt`
  font-family: ${props => props.theme.main.fonts.spartan};
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.73px;
  text-transform: uppercase;
  opacity: 0.5;
`;
const Definition = styled.dd`
  font-family: ${props => props.theme.main.fonts.antonio};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;
`;

const DefinitionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
  padding: 11px 24px;
  margin-bottom: 8px;
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
    <FactSection>
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
