import "styled-components";
import { CardCategory } from "./services/CreatorService/CreatorService.type";
declare module "styled-components" {
  export interface DefaultTheme {
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
      [key in CardCategory]: {
        colors: {
          gradientFrom: string;
          gradientIntermediate?: string;
          gradientTo: string;
        };
      };
    };
  }
}
