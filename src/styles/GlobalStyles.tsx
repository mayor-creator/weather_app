import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* DM Sans - Light (300) */
  @font-face {
    font-family: "DM Sans", sans-serif;
    src: url("../assets/fonts/DM_Sans/static/DMSans-Light.ttf");
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
  }

    /* DM Sans - Medium (500) */
  @font-face {
    font-family: "DM Sans", sans-serif;
    src: url("../assets/fonts/DM_Sans/static/DMSans-Medium.ttf");
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }

   /* DM Sans - SemiBold (600) */
  @font-face {
    font-family: "DM Sans", sans-serif;
    src: url("../assets/fonts/DM_Sans/static/DMSans-SemiBold.ttf");
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

   /* DM Sans - SemiBold Italic (600 Italic) */
  @font-face {
    font-family: "DM Sans", sans-serif;
    src: url("../assets/fonts/DM_Sans/static/DMSans-SemiBoldItalic.ttf");
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

    /* DM Sans - Bold (700) */
  @font-face {
    font-family: "DM Sans", sans-serif;
    src: url("../assets/fonts/DM_Sans/static/DMSans-Bold.ttf");
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }

    /* Bricolage Grotesque - Bold (700) */
  @font-face {
    font-family: "Bricolage Grotesque", sans-serif;
    src: url("../assets/fonts/Bricolage_Grotesque/static/BricolageGrotesque-Bold.ttf");
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
  }

  body{
    font-family: "DM Sans", sans-serif;
  }
`;
