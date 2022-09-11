import React from 'react'
import { USER_POST } from '../../../Enviroment/api';
import { UserContext } from '../../../Shared/Context/UserContext';
import Button from '../../../Shared/Forms/Button/Button';
import Input from '../../../Shared/Forms/Input/Input';
import { Error } from '../../../Shared/Helpers/Error';
import { useFetch } from '../../../Shared/Hooks/useFetch';
import { useForm } from '../../../Shared/Hooks/useForm';
import styles from './LoginCreate.module.css'

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? <Button disabled>Looking for a snack...</Button> : <Button>Sign Up</Button>}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate