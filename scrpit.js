const btn = document.querySelector('#btn-incluir');

btn.addEventListener('click', function(e){
    
    const inclusao = document.querySelector('#inclusao')

    const value = inclusao.value;

    var btn = document.createElement('li');
    btn.innerHTML = value;
    document.getElementById('incluir').appendChild(btn);
    
   
})