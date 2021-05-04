import { DefaultTheme } from "styled-components";

const defaultThemeColors = {
  white: "#fff",
  black: "#000",
  ripePlum: "#310050",
  bossanova: "#5A3472",
  eminence: "#613B79",
  darkerBossanovaShade: "#542865",
  atoll: "#0D658A",
  mintGreen: "#B0FFB4",
  selectiveYellow: "#FFB800",
  buttermilk: "#FFF7B0",
  electricViolet: "#AD00FF",
  cottonCandy: "#FFB0E9",
  gableGreen: "#0F2027",
  tePapaGreen: "#203A43",
  sanJuan: "#2C5364",
};

export const defaultTheme: DefaultTheme = {
  background: {
    colors: {
      gradientFrom: defaultThemeColors.black,
      gradientTo: defaultThemeColors.ripePlum,
    },
  },

  header: {
    colors: {
      text: defaultThemeColors.white,
    },
  },

  button: {
    colors: {
      background: defaultThemeColors.bossanova,
      backgroundHover: defaultThemeColors.eminence,
      backgroundFocus: defaultThemeColors.eminence,
      backgroundActive: defaultThemeColors.darkerBossanovaShade,
      label: defaultThemeColors.white,
      labelHover: defaultThemeColors.white,
      labelFocus: defaultThemeColors.white,
      labelActive: defaultThemeColors.white,
    },
  },

  card: {
    colors: {
      background: defaultThemeColors.white,
      text: defaultThemeColors.black,
    },
  },

  avatars: {
    aliveCell: {
      colors: {
        gradientFrom: defaultThemeColors.selectiveYellow,
        gradientTo: defaultThemeColors.buttermilk,
      },
    },
    deadCell: {
      colors: {
        gradientFrom: defaultThemeColors.atoll,
        gradientTo: defaultThemeColors.mintGreen,
      },
    },
    lifeOccured: {
      colors: {
        gradientFrom: defaultThemeColors.electricViolet,
        gradientTo: defaultThemeColors.cottonCandy,
      },
    },
    deathOccured: {
      colors: {
        gradientFrom: defaultThemeColors.gableGreen,
        gradientIntermediate: defaultThemeColors.tePapaGreen,
        gradientTo: defaultThemeColors.sanJuan,
      },
    },
  },
};
