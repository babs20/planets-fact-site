import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    main: {
      colors: {
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
      typography: {
        'text-h1': readonly SimpleInterpolation[];
        'text-h2': readonly SimpleInterpolation[];
        'text-h3': readonly SimpleInterpolation[];
        'text-h4': readonly SimpleInterpolation[];
        'text-body': readonly SimpleInterpolation[];
      };
      fonts: {
        spartan: string;
        antonio: string;
      };
      planetDimensions: {
        mercury: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        venus: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        earth: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        mars: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        jupiter: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        saturn: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        uranus: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
        neptune: {
          mobile: readonly SimpleInterpolation[];
          tablet: readonly SimpleInterpolation[];
          desktop: readonly SimpleInterpolation[];
        };
      };
    };
  }
}
