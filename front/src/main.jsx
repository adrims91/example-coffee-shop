import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container id='container-width'>
    <Layout />
    </Container>
  </StrictMode>,
)
