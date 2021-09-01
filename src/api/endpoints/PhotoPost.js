import React from 'react'

export const PhotoPost = () => {
    const [token, setToken] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [peso, setPeso] = React.useState('');
    const [idade, setIdade] = React.useState('');
    const [img, setImg] = React.useState('');
    

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('img', img);
        formData.append('nome', nome);
        formData.append('idade', idade);
        formData.append('peso', peso);
        
        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer' + token,
            },
            body: formData,
        }).then(response => {
            console.log(response);
            return response.json();
        }).then((json) => {
            console.log(json);
            return json;
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={token} onChange={({target}) => setToken(target.value)} placeholder="token" />
            <input type="text" value={nome} onChange={({target}) => setNome(target.value)} placeholder="nome" />
            <input type="text" value={peso} onChange={({target}) => setPeso(target.value)} placeholder="peso" />
            <input type="text" value={idade} onChange={({target}) => setIdade(target.value)} placeholder="idade" />
            <input type="file" onChange={({target}) => setImg(target.files[0])} />
            <button>Enviar</button>
        </form>
    )
}
