const btn = document.querySelector('#btn-incluir');
const inclusao = document.querySelector('#inclusao');
const value = inclusao.value;

function carregarStorage(){
    var json = localStorage.getItem('tarefas');
    return json;
}

function listarTarefas(){
    let json = carregarStorage();
    if(json !== null){
        criarItem(json)
    }
}

btn.addEventListener('click', function(){
    
    var _local_storage = carregarStorage();

    if(_local_storage === null){
        var json = {};

        json.tarefas = [{
            "id": new Date().getTime(),
            "tarefa": inclusao.value
        }];

        _local_storage = JSON.stringify(json);
        localStorage.setItem('tarefas', _local_storage);

    } else {

        var arrayTarefas = JSON.parse(_local_storage);
        
        var json = {
            "id": new Date().getTime(),
            "tarefa": inclusao.value
        }

        arrayTarefas['tarefas'].push(json);

        _local_storage = JSON.stringify(arrayTarefas);
        
        localStorage.setItem('tarefas', _local_storage);
    }

    criarItem(_local_storage);    
})


function excluir(elemento){

    var id = elemento.replace("checkbox", "");

    if (document.getElementById(elemento).checked) {

        var confirmExcluir = confirm('Deseja realmente excluir?');
    
        if(confirmExcluir === true){

            _local_storage = carregarStorage();
            var objeto = JSON.parse(_local_storage);
            arrayTarefas = objeto.tarefas;

            console.log(id);
            console.log(arrayTarefas);
        
            var novo_array = arrayTarefas.filter(valor => valor.id != id);
        
            objeto.tarefas = novo_array;
        
            _local_storage = JSON.stringify(objeto);
            localStorage.setItem('tarefas', _local_storage);

            criarItem(_local_storage);
        }
    } else {
        alert("Você precisa selecionar o item!");
    }
}

function criarItem(json){
    var objeto = JSON.parse(json);

    document.querySelector('ul').innerHTML = "";
    objeto.tarefas.forEach(o =>{

        let checkbox = document.createElement('input');
        let li = document.createElement('li');  
        let btn = document.createElement('button');  
        let id = o.id;

        checkbox.id = 'checkbox'+ id;
        checkbox.setAttribute('type', 'checkbox');
    
        checkbox.addEventListener('click', (e) => {
            if(e.target.checked){
                li.classList.add('riscar')
            }else{
                li.classList.remove('riscar');
            }
        })

        li.id = 'lista';
        btn.id = 'lista';  
        btn.innerHTML = 'Deletar';
        btn.onclick = function() { excluir(checkbox.id) };
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(o.tarefa));
        li.appendChild(btn);
        document.querySelector('ul').appendChild(li);
        
        inclusao.value = "";
    })
}

//Início
listarTarefas();
 

