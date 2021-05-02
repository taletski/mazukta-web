import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    background: {
      colors: {
        gradientFrom: string;
        gradientTo: string;
      };
    };

    header: {
      colors: {
        text: string;
      };
    };

    button: {
      colors: {
        background: string;
        backgroundHover: string;
        backgroundFocus: string;
        backgroundActive: string;
        label: string;
        labelHover: string;
        labelFocus: string;
        labelActive: string;
      };
    };

    card: {
      colors: {
        background: string;
        text: string;
      };
    };

    avatars: {
      aliveCell: {
        colors: {
          gradientFrom: string;
          gradientTo: string;
        };
      };
      deadCell: {
        colors: {
          gradientFrom: string;
          gradientTo: string;
        };
      };
      lifeOccured: {
        colors: {
          gradientFrom: string;
          gradientTo: string;
        };
      };
      deathOccured: {
        colors: {
          gradientFrom: string;
          gradientIntermediate?: string;
          gradientTo: string;
        };
      };
    };
  }
}
