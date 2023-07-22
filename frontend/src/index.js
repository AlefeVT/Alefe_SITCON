import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SolicitacoesClinicas from './pages/SolicitacoesClinicas';
import ListagemPacientes from './pages/ListagemPacientes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListagemPacientes />
  },
  {
    path: "solicitacoes",
    element: <SolicitacoesClinicas />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);