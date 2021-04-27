import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Root.styles';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
