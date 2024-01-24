class Participante {
    constructor(nome, email) {
        this.nomeParticipante = nome;
        this.emailParticipante = email;
    }

    get nome() {
        return this.nomeParticipante;
    }

    set nome(value) {
        this.nomeParticipante = value;
    }

    get email() {
        return this.emailParticipante;
    }

    set email(value) {
        this.emailParticipante = value;
    }
}


module.exports = Participante;
