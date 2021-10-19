import { ThemeProvider } from '@material-ui/core';
import './App.css';
import { theme } from './infrastructure/material-ui/theme';
import FrontPage from './pages/front-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
        <FrontPage />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
