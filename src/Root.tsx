import { App } from './App';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { PeopleContextProvider } from './store/PeopleContext';
import { NotFoundPage } from './components/NotFoundPage';

export const Root = () => {
  return (
    <Router>
      <PeopleContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="people" element={<PeoplePage />}>
              <Route path=":slug" element={<PeoplePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PeopleContextProvider>
    </Router>
  );
};
