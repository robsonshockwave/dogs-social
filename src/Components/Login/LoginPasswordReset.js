import React from 'react'
import { useNavigate } from 'react-router'
import { PASSWORD_RESET } from '../../Api'
import { useFetch } from '../../Hooks/useFetch'
import { UseForm } from '../../Hooks/UseForm'
import { Button } from '../Forms/Button'
import { Input } from '../Forms/Input'
import { Error } from '../Helper/Error'
import Head from '../Helper/Head'

export const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const password = UseForm();
    const {error, loading, request} = useFetch();
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if(key) {
            setKey(key);
        }
        
        if(login) {
            setLogin(login);
        }
    }, []); 

    async function handleSubmit(event) {
        event.preventDefault();

        if(password.validate()) {
            const {url, options} = PASSWORD_RESET({
                login,
                key,
                password: password.value
            })
    
            const {response} = await request(url, options);
            
            if(response.ok) {
                navigate('/login');
            }
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Resete a senha" />
            <h1 className="title">Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="passoword" name="password" {...password}/>
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
            </form>

            <Error error={error} />
        </section>
    )
}
