import React, { useState, useContext } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formInput, setFormInput] = useState(defaultFormFields);
  const { email, password } = formInput;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password or email');
          break;
        case 'auth/user-not-found':
          alert('Incorrect passsword or email');
          break;
        default:
          console.log(err);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => {
    setFormInput({
      email: '',
      password: '',
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          name='email'
          required
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          name='password'
          required
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit' onSubmit={handleSubmit}>
            Sign In
          </Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
