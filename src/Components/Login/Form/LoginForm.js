import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../Shared/Forms/Input/Input';
import Button from '../../../Shared/Forms/Button/Button';
import styles from './LoginForm.module.css';
import { useForm } from '../../../Shared/Hooks/useForm';
import { UserContext } from '../../../Shared/Context/UserContext';

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Buscando por um petisco...</Button> : <Button>Entrar</Button>}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
