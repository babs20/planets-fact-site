import { DefaultTheme } from 'styled-components';
import { css } from 'styled-components';

const fonts = {
  antonio:
    "'Antonio', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  spartan:
    "'Spartan', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};

const mainTheme: DefaultTheme = {
  main: {
    colors: {
      mainText: '#fff',
      'blue-900': '#070724',
      'blue-500': '#38384F',
      'blue-100': '#838391',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6F2ED6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1EC2A4',
      neptune: '#2D68F0',
    },
    typography: {
      'text-h1': css`
        font-family: ${fonts.antonio};
        font-size: 80px;
        line-height: 104px;
        font-weight: 500;
        text-transform: uppercase;
      `,
      'text-h2': css`
        font-family: ${fonts.antonio};
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -1.05px;
        text-transform: uppercase;
      `,
      'text-h3': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.6px;
        text-transform: uppercase;
      `,
      'text-h4': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
      `,
      'text-body': css`
        font-family: ${fonts.spartan};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 25px;
      `,
    },
    fonts: {
      antonio:
        "'Antonio', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      spartan:
        "'Spartan', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    },
    planetDimensions: {
      mercury: {
        mobile: css`
          height: 111px;
          width: 111px;
        `,
        desktop: css`
          height: 184px;
          width: 184px;
        `,
      },
      venus: {
        mobile: css`
          height: 154px;
          width: 154px;
        `,
        desktop: css`
          height: 253px;
          width: 253px;
        `,
      },
      earth: {
        mobile: css`
          height: 173px;
          width: 173px;
        `,
        desktop: css`
          height: 285px;
          width: 285px;
        `,
      },
      mars: {
        mobile: css`
          height: 129px;
          width: 129px;
        `,
        desktop: css`
          height: 213px;
          width: 213px;
        `,
      },
      jupiter: {
        mobile: css`
          height: 224px;
          width: 224px;
        `,
        desktop: css`
          height: 369px;
          width: 369px;
        `,
      },
      saturn: {
        mobile: css`
          height: 256px;
          width: 256px;
        `,
        desktop: css`
          height: 422px;
          width: 422px;
        `,
      },
      uranus: {
        mobile: css`
          height: 176px;
          width: 176px;
        `,
        desktop: css`
          height: 290px;
          width: 290px;
        `,
      },
      neptune: {
        mobile: css`
          height: 173px;
          width: 173px;
        `,
        desktop: css`
          height: 285px;
          width: 285px;
        `,
      },
    },
  },
};

export { mainTheme };
