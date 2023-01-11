import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IssueContextProvider } from "./Context/IssueContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IssueContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssueContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
