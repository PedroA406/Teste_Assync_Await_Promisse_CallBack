
const alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 7.2 },
    { id: 3, nome: "Carla", nota: 9.0 }
  ];


function consultarNotaPromise(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const aluno = alunos.find(a => a.id === id); // Procurando o aluno pelo ID
        if (aluno) {
          resolve(aluno.nota); // Resolve a Promise com a nota
        } else {
          reject(`Aluno com ID ${id} não encontrado`); // Rejeita a Promise se não encontrar o aluno
        }
      }, 2000);
    });
  }
  
  
  const input = document.getElementById("input"); 
  consultarNotaPromise(2)


    .then(nota => {


      
      document.getElementById('resultado2').innerText = `Nota do aluno 2: ${nota}`
      

    })
    .catch(erro => {
      console.log(erro);
    });
  

   
  consultarNotaPromise(1)
    .then(nota => {

      document.getElementById('resultado').innerText = `Nota do aluno 1: ${nota}`
    
    })
    .catch(erro => {
      console.log(erro);
    });


    consultarNotaPromise(4)
    .then(nota => {

      document.getElementById('resultado3').innerText = `Nota do aluno 3: ${nota}`
    
    })
    .catch(erro => {

       document.getElementById('resultado3').innerText = `ERRO: ${erro}`
    
    });




    function consultarNota(id, callback) {
      setTimeout(() => {
        const aluno = alunos.find(a => a.id === id); 
        if (aluno) {
          callback(null, aluno.nota); 
        } else {
          callback(`Aluno com ID ${id} não encontrado`, null); 
        }
      }, 2000); 
    }
    
  
    consultarNota(1, (erro, nota) => {
      if (erro) {
        console.log(erro);
      } else {
        document.getElementById('resultado4').innerText = `Nota ANA: ${nota}`
      }
    });
    
    consultarNota(4, (erro, nota) => {
      if (erro) {
        document.getElementById('resultado5').innerText = `ERRO: ${erro}`
      } else {
        console.log(`Nota do aluno 4: ${nota}`);
      }
    });



    function consultarNotaPromise(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const aluno = alunos.find(a => a.id === id); 
          if (aluno) {
            resolve(aluno.nota); 
          } else {
            reject(`Aluno com ID ${id} não encontrado`); 
          }
        }, 2000); 
      });
    }
    
    
    async function consultarNotaAsync(id) {
      try {
        const nota = await consultarNotaPromise(id); 
        document.getElementById(`resultado6`).innerText = `Nota CArla ID: ${id} NOTA: ${nota}`
      } catch (erro) {
      document.getElementById('resultado7').innerText = `ERRO: ${erro}`
      }
    }
    
    
    consultarNotaAsync(1); 
    consultarNotaAsync(2); 
    consultarNotaAsync(3); 
    consultarNotaAsync(4); 

    