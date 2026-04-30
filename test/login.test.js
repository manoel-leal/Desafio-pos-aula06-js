import { realizarLogin } from "../src/login.js";
import assert from 'node:assert';

describe('Realizar Login', () => {
    it('Deve realizar login com sucesso', () => {
        const email = 'roberto.savares@test.com.br';
        const senha = 'teste123'

        const mensagemEsperada = 'Login realizado com sucesso!'

        const mensagem = realizarLogin(email, senha);

        assert.equal(mensagem, mensagemEsperada);
    })

    it('Não deve realizar login com E-mail inexistente', () => {
        const email = 'pessoa.teste@test.com.br';
        const senha = '12345678'
        const mensagemEsperada = 'E-mail inválido';

        assert.throws(() => realizarLogin(email, senha),{
            message: mensagemEsperada
        })
    })

    it('Não deve realizar login com senha inválida', () => {
        const email = 'roberto.savares@test.com.br';
        const senha = '12345678'
        const mensagemEsperada = 'Senha incorreta';

        assert.throws(() => realizarLogin(email, senha),{
            message: mensagemEsperada
        })
    })

    it('Não deve realizar login com usuário expirado', () => {
        const email = 'manoel.leal@test.com.br';
        const senha = '12345678'
        const mensagemEsperada = 'Usuário expirado!';

        assert.throws(() => realizarLogin(email, senha),{
            message: mensagemEsperada
        })
    })
})