import React from 'react'
import styles from './PasswordReset.module.css'
import Button from '../../../Shared/Forms/Button/Button'
import Input from '../../../Shared/Forms/Input/Input'
import { Error } from '../../../Shared/Helpers/Error'
import { useFetch } from '../../../Shared/Hooks/useFetch'
import { useForm } from '../../../Shared/Hooks/useForm'
import { PASSWORD_RESET } from '../../../Enviroment/api'
import { useNavigate } from 'react-router-dom'
import { Head } from '../../../Shared/Helpers/Head/Head'

const PasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm('password');
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <section className='animeLeft'>
      <Head title="Password Reset" />
      <h1 className='title'>Password Reset</h1>
      <form onSubmit={handleSubmit}>
        <Input label="New Password" type="password" name="password" {...password} />
        {loading ? <Button disabled>Catching up...</Button> : <Button>Reset</Button>}
      </form>
      {error && <Error error={error} />}
    </section>
  )
}

export default PasswordReset