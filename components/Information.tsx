import styled from 'styled-components';

const InfoSection = styled.section`
  color: ${props => props.theme.main.colors.mainText};
  text-align: center;
  margin-bottom: 28px;
`;

const PlanetName = styled.h1`
  ${props => props.theme.main.typography['text-h2']};
  letter-spacing: normal;
  margin-bottom: 16px;
`;

const PlanetCopy = styled.p`
  ${props => props.theme.main.typography['text-body']};
  font-size: 11px;
  line-height: 22px;
  margin-bottom: 32px;
`;

const Cite = styled.cite`
  ${props => props.theme.main.fonts.spartan};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  opacity: 0.5;
`;

const InfoLink = styled.a`
  font-weight: 700;

  &:visited {
    color: ${props => props.theme.main.colors.mainText};
  }
`;

const SourceSVG = styled.svg`
  display: inline-block;
  margin: 0 0 1px 4px;
`;

export const Information = (): JSX.Element => {
  return (
    <InfoSection>
      <PlanetName>Mercury</PlanetName>
      <PlanetCopy>
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </PlanetCopy>
      <Cite>
        Source:{' '}
        <InfoLink
          href='https://en.wikipedia.org/wiki/Mercury_(planet)'
          rel='noopener noreferrer'
          target='_blank'
        >
          Wikipedia
          <SourceSVG xmlns='http://www.w3.org/2000/svg' width='12' height='12'>
            <path
              fill='#FFF'
              d='M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z'
              opacity='.5'
            />
          </SourceSVG>
        </InfoLink>
      </Cite>
    </InfoSection>
  );
};
export default Information;
