import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
      <img className="mb-4 bootstrap-logo" 
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" 
              alt="Bootstrap 5" />

        <Form.Group controlId="sign-in-email-address">
          <Form.Control type="User" size="lg" placeholder="User" autoComplete="username" className="position-relative" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
        </Form.Group>
        <div className="d-grid">
          <Button variant="primary" size="lg">Sign in</Button>
        </div>
        <p className="mt-5 text-muted">&copy; 2022-2023</p>
      </Form>
    </Container>
  );
}

export default App;
