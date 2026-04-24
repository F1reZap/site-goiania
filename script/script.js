// aparecer e sumir a barra lateral
document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.querySelector('.Side_Bar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'flex' : 'none';
});

document.getElementById('meuCheckbox').addEventListener('change', function() {
    const spanData = document.getElementById('dataRegistro');
    
    if (this.checked) {
        //aqui que cria o objeto de data
        const agora = new Date();
        
        //Formata a data e hora para o padrão BR
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        
        spanData.textContent = `Clicado em: ${dataFormatada} às ${horaFormatada}`;
    } else {
        //Limpa o texto
        spanData.textContent = '';
    }
});