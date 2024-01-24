class Palestrante {
    constructor(nome, email, profissao = 'Palestrante') {
        this._nome = nome;
        this._email = email;
        this._profissao = profissao;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get profissao() {
        return this._profissao;
    }

    set profissao(value) {
        this._profissao = value;
    }
}


module.exports = Palestrante;
