
const usuarios = [
    {
        id: 1,
        nome: 'Manoel Leal', 
        email: 'manoel.leal@test.com.br',
        senha: '12345678',
        expirado: true
    },
    {
        id: 2,
        nome: 'Roberto Savares',
        email: 'roberto.savares@test.com.br',
        senha: 'teste123',
        expirado: false
    }

]

export function realizarLogin(email, senha){
    let usuario = null;

    for(let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email == email){
            usuario = usuarios[i];
            break;
        }  
    }

    if(!usuario){
        throw new Error('E-mail inválido');
    }

    if(usuario.senha !== senha){
        throw new Error('Senha incorreta');
    }

    if(usuario.expirado == true){
        throw new Error('Usuário expirado!');
    }

    return 'Login realizado com sucesso!';
   
}