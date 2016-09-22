function Student(id, name, email) {
    if (!(this instanceof Student)) {
        return new Student(id, name, email);
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log('Nome: ' + this.name);
        console.log('Email: ' + this.email);
    }
}

function University() {
    if (!(this instanceof University)) {
        return new University();
    }

    this.students = [
        new Student('98007865', 'Alison Rafael Marinho Gonçalves', 'armg.alison@gmail.com'),
        new Student('98003063', 'Ariane Presciliana Moreira', 'ariane_prii@hotmail.com'),
        new Student('98008543', 'Auro Felipe Sampaio Mota', 'aurofmota@gmail.com'), // Email updated
        new Student('98007380', 'Douglas de Cássio Oliveira', 'douglinhas_uchiha@hotmail.com'),
        new Student('98007574', 'Douglas Eduardo Caruso', 'doug-caruso@hotmail.com'),
        new Student('98007049', 'Elenice Carla Assis', 'elenice.cassis@gmail.com'),
        new Student('98008002', 'Fabiano Gonçalves Lomonaco Júnior', 'fabiano.lomonaco.junior@gmail.com'),
        new Student('98007381', 'Gustavo Henrique Martins', 'gustavo_sh8@hotmail.com'),
        new Student('98001244', 'Jefferson Leon Pereira', 'jeffersonleon310@yahoo.com.br'),
        new Student('98007580', 'Leandro Gabriel Garcia', 'leandrolg13@yahoo.com.br'),
        new Student('98007858', 'Luiz Eduardo da Costa', 'costaeduardoluiz@gmail.com'),
        new Student('98007071', 'Marcos Antonio Rogel Junior', 'junior_bs192@yahoo.com.br'),
        new Student('98008063', 'Mateus Ferreira de Souza', 'seraomateus@hotmail.com'),
        new Student('98007350', 'Matheus José Vieira Lemes', 'matheus_lemes1996@hotmail.com'),
        new Student('98002394', 'Maycon Assis Fonseca Ferreira', 'maycon.univas@gmail.com'),
        new Student('98004513', 'Rodrigo Neves Ottoboni Dias', 'rodrigon@fuvs.br'),
        new Student('13001952', 'Sabrina Andrade Pereira', 'saandradepereira@gmail.com'),
        new Student('98007252', 'Samuel Barreiro Lemes', 'samuellemes25@gmail.com'),
        new Student('98007985', 'Simao Faustino Laudino', 'simao-pf@hotmail.com'),
        new Student('98007494', 'Wellington da Cruz Caldeira', 'well.caldeira@gmail.com'),
        new Student('98007587', 'Wellington de Jesus Braga', 'wellington.braga.inatel@gmail.com')
    ];

    this.getStudentById = function (id) {
        return this.students.find(student => {
            return id === student.id;
        });
    }
}

(function printStudent() {
    let id = process.argv[2];
    let university = new University();
    let student = university.getStudentById(id);
    if (student) {
        student.print();
    } else {
        console.log('Matrícula não encontrada.');
    }
})();