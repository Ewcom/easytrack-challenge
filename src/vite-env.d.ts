/// <reference types="vite/client" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    gray: string;
    purpleGray: string;
  }
}
