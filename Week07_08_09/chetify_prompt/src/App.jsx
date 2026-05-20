import { useState } from 'react';
import LandingPage from './components/pages/LandingPage';
import SearchEmptyStatePage from './pages/SearchEmptyStatePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LandingPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return <SearchEmptyStatePage />;
}

export default App;
