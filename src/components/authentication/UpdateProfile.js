import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './../../contexts/AuthContext';
import CenteredContainer from './CenteredContainer';


export default function UpdateProfile() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/user')
      })
      .catch(() => {
        setError('Failed to update account');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <CenteredContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
            </Form.Group>

            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
            
          </Form>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Link to="/user">Cancel</Link>
      </div>
    </CenteredContainer>
  )
}
