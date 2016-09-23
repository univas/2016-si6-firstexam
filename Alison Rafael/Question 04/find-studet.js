var students = [
    {mat: 98007865, name: "Alison Rafael Marinho Gonçalves", email: "armg.alison@gmail.com"},
    {mat: 98003063, name: "Ariane Presciliana Moreira", email: "ariane_prii@hotmail.com"},
    {mat: 98008543, name: "Auro Felipe Sampaio Mota", email: "palubo01@gmail.com"},
    {mat: 98007380, name: "Douglas de Cássio Oliveira", email: "douglinhas_uchiha@hotmail.com"},
    {mat: 98007574, name: "Douglas Eduardo Caruso", email: "doug-caruso@hotmail.com"},
    {mat: 98007049, name: "Elenice Carla Assis", email: "elenice.cassis@gmail.com"},
    {mat: 98008002, name: "Fabiano Gonçalves Lomonaco Júnior", email: "fabiano.lomonaco.junior@gmail.com"},
    {mat: 98007381, name: "Gustavo Henrique Martins", email: "gustavo_sh8@hotmail.com"},
    {mat: 98001244, name: "Jefferson Leon Pereira", email: "jeffersonleon310@yahoo.com.br"},
    {mat: 98007580, name: "Leandro Gabriel Garcia", email: "leandrolg13@yahoo.com.br"},
]

function getArgv(){
    return process.argv.slice(2,3);
}

function find(mat) {
    students.map(function (person) {
    if (person.mat == mat) {
        console.log('Nome: ' + person.name);
        console.log('Email:' + person.email);
    } else {
        return null
    }
    });
}

find(getArgv());