import 'styled-components';
import { theme } from '../global/GlobalStyles';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
