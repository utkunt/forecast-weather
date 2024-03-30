import React from 'react';
import { SearchForm } from './components/SearchForm/SearchForm';
import DisplayPage from "./components/DisplayPage/DisplayPage.tsx";

export const App: React.FC = () => {
  return (
    <div>
      <h1>React App</h1>
      <SearchForm />
      <DisplayPage />
    </div>
  );
}