import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../Shared/Forms/Input/Input';
import Button from '../../../Shared/Forms/Button/Button';
import styles from './LoginForm.module.css';
import stylesBtn from '../../../Shared/Forms/Button/Button.module.css';
import { useForm } from '../../../Shared/Hooks/useForm';
import { UserContext } from '../../../Shared/Context/UserContext';
import { Error } from '../../../Shared/Helpers/Error';

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
    <section className="animeLeft">
      <h1 className="title">Log In</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Username" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? <Button disabled>Looking for a snack...</Button> : <Button>Log In</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/lost">Lost Password?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Sign Up</h2>
        <p>Don't have an account yet? Register on the website</p>
        <Link className={stylesBtn.button} to="/login/create">Sign Up</Link>
      </div>
    </section>
  );
};

export default LoginForm;
