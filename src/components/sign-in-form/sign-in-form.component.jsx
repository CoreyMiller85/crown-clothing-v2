import React, { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignInForm = () => {
  const [formInput, setFormInput] = useState(defaultFormFields);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput({});
  };

  return (
    <div>
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
      <Button>Sign In</Button>
    </div>
  );
};

export default SignInForm;
