const btn = document.querySelector('#btn-incluir');

btn.addEventListener('click', function(){

    const inclusao = document.querySelector('#inclusao')
    const value = inclusao.value;
    
    var local_storage = localStorage.getItem('item')

    var _local_storage = localStorage.getItem('tarefas');
    var arrayTarefas = new Array();
    var json_local_storage 
    
    if(_local_storage=== null){
        var json = '{"tarefas": ["' + inclusao.value + '"]}';
        var objeto = JSON.parse(json);
        
    
        var json_local_storage = JSON.stringify(objeto);
        localStorage.setItem('tarefas', json_local_storage);

    }else{
        arrayTarefas = JSON.parse(_local_storage);
        arrayTarefas['tarefas'].push(inclusao.value);

        json_local_storage = JSON.stringify(arrayTarefas);
        localStorage.setItem('tarefas', json_local_storage)
    }
   
    let checkbox = document.createElement('input');
    let li = document.createElement('li');  
    let btn = document.createElement('button');  
        
    checkbox.id = 'checkbox'
    checkbox.setAttribute('type', 'checkbox')    
    li.id = 'lista'    
    btn.id = 'lista'  
    btn.innerHTML = 'Deletar';
    btn.onclick = function() { excluir(this) };
    
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(inclusao.value));
    li.appendChild(btn)
    document.querySelector('ul').appendChild(li)

    inclusao.value = "";

    excluir()
    
})

function excluir(elemento){
    _local_storage = localStorage.getItem('tarefas');
    var objeto = JSON.parse(_local_storage)
    arrayTarefas = objeto.tarefas;

    var novo_array = arrayTarefas.filter(valor => valor !== elemento.id)

    objeto.tarefas = novo_array;

    _local_storage = JSON.stringify(objeto);
    localStorage.setItem('tarefas', _local_storage)

    confirm('Você tem certeza?')

    if(confirm === false){
        
    }

    document.getElementById('lista').remove();
}




    
