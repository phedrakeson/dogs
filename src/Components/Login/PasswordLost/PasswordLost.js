import React from 'react'
import { PASSWORD_LOST } from '../../../Enviroment/api'
import Button from '../../../Shared/Forms/Button/Button'
import Input from '../../../Shared/Forms/Input/Input'
import { Error } from '../../../Shared/Helpers/Error'
import { Head } from '../../../Shared/Helpers/Head/Head'
import { useFetch } from '../../../Shared/Hooks/useFetch'
import { useForm } from '../../../Shared/Hooks/useForm'
import styles from './PasswordLost.module.css'

const PasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({ login: login.value, url: window.location.href.replace('lost', 'reset') });
      await request(url, options);
    }

  }

  return (
    <section>
      <Head title="Lost Password" />
      <h1 className='title'>Lost Password?</h1>
      {data ? <p style={{ color: '#4c1' }}>Email sent.</p> : <form onSubmit={handleSubmit}>
        <Input label="Email / User" type="text" name="email" {...login} />
        {loading ? <Button disabled>Catching up...</Button> : <Button>Submit Email</Button>}
      </form>}
      {error && <Error error={error} />}
    </section>
  )
}

export default PasswordLost