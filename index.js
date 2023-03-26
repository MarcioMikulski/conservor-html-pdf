//Como ler dados de um arquivo
const fs = require("fs");

modificarUsuario("Marcio Mikulski", "Forção do zero ao profissional Nodejs", "Nodejs");

function modificarUsuario(nome, curso, categoria){
    fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) => {
        if(erro){
            console.log("erro ao ler o arquivo");
        }else{
            //JSON.paser converte de texto para javascript
            var conteudo = JSON.parse(dados); 
            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;
                //JSON.stringfy converte de  javascript para texto
                fs.writeFile("./usuario.json", JSON.stringify(conteudo),(erro) => {
                    if(erro){
                        console.log("Ocorreu um erro ao tentar converter o arquivo");
                    }
                });
        }
    });


}

























/* 
 */