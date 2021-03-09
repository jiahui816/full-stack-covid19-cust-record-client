import './App.css';
import QRCode from 'qrcode.react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { createLogEntry } from './API';
import { useState } from 'react';
function App() {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const today = new Date();

  const onSubmit = (data, e) => {
    e.preventDefault();
    createLogEntry(data);
    setLoading(true);
    e.target.reset();
  };

  return (
    <div className='app'>
      <h2>Company X </h2>
      <h3>Covid-19 Check-In</h3>
      <QRCode value='https://wb-covid19-resgistration.netlify.app/' />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='customer_name'
            type='text'
            placeholder='Enter Name'
            ref={register}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='customer_email'
            type='email'
            placeholder='123@example.com'
            ref={register}
          />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name='customer_number'
            type='number'
            placeholder='Enter Phone Number'
            ref={register}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Text className='text-muted'>
            Current Date & Time{' '}
            {today.getFullYear() +
              '-' +
              (today.getMonth() + 1) +
              '-' +
              today.getDate() +
              ' ' +
              today.getHours() +
              ':' +
              today.getMinutes()}
          </Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <br />
        {loading ? (
          <Form.Text className='text-muted'>Successfully Check-In ✅</Form.Text>
        ) : null}
      </Form>
    </div>
  );
}

export default App;
