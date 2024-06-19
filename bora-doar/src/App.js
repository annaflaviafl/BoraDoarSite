import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Função para simular um delay de 2 segundos
  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 2000); // 2 segundos de delay
  };

  return (
    <Router>
      <Routes>
        {/* Route para o Login */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={simulateLoading} />} // Chama a função simulateLoading ao fazer login
        />

        {/* Route para a Home com verificação de autenticação */}
        <Route
          path="/home"
          element={isLoading ? (
            <p>Carregando...</p> // Mostra "Carregando..." enquanto isLoading for true
          ) : isLoggedIn ? (
            <Home isLoggedIn={isLoggedIn} />
          ) : (
            <Navigate to="/login" />
          )}
        />

        {/* Rota de fallback, redireciona para /login se não houver correspondência */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
