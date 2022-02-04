const alunos = [
    {
        nome: 'joão',
        nota: 3,
        turma:'1B'
    },
    {    
        nome:'Sofia',
        nota:6,
        turma:'1B',
    },
    {
        nome: 'Paulo',
        nota:8,
        turma:'2C',        
    },
    {
        nome:'Miguel',
        nota:4,
        turma: '1B',
    },
];
function alunosAprovados(arr, media){
    let aprovados = [];
    

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
            
        }             
    }
       
    return aprovados;
  

}

console.log(alunosAprovados(alunos, 5));