import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SolicitacoesClinicas from './pages/SolicitacoesClinicas';
import ListagemPacientes from './pages/ListagemPacientes';
import ListagemSolicitacao from './pages/ListagemSolicitacao';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListagemPacientes />
  },
  {
    path: "solicitacao",
    element: <SolicitacoesClinicas />
  },
  {
    path: "listagem",
    element: <ListagemSolicitacao />
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);