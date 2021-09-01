import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../Forms/Input';
import { Button } from '../Forms/Button';
import { UseForm } from '../../Hooks/UseForm';
import { TOKEN_POST, USER_GET } from '../../api';
import { UserContext } from '../../userContext';

export const LoginForm = () => {
    const username = UseForm();
    const password = UseForm();
    const {userLogin} = React.useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            <Input label="Usuário" type="text" name="username" {...username}/>
            <Input label="Senha" type="password" name="password" {...password}/>
            <Button>Entrar</Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
        </section>
    );
}
