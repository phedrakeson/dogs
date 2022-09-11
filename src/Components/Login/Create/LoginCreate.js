import React from 'react'
import Button from '../../../Shared/Forms/Button/Button';
import Input from '../../../Shared/Forms/Input/Input';
import { useForm } from '../../../Shared/Hooks/useForm';
import styles from './LoginCreate.module.css'

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Sign Up</Button>
      </form>
    </section>
  )
}

export default LoginCreate