function getSelectValue() {
    var build = document.getElementById('build')
    var getSelectedValue = document.getElementById("boxchamp").value;
        if (getSelectedValue == 'Nautilus') { 
            build.innerHTML =`Para ${getSelectedValue}, a melhor build é:<p>
            Itens Iniciais: Escudo Relicário  e 2 Poções de Vida</p>
             <p>Evoluir o Escudo Relicário > Convergência de Zeke > Solari > Redenção > Juramento do Cavaleiro. <p>Bota: Botas da Mobilidade. </p>`
    } else if (getSelectedValue == 'Thresh') { 
        build.innerHTML =`Para ${getSelectedValue}, a melhor build é:<p>
            Itens Iniciais: Moeda Antiga  e 2 Poções de Vida</p>
             <p>Evoluir a Moeda Antiga > Convergência de Zeke > Redenção > Juramento do Cavaleiro > Solari </p> <p>Bota: Botas da Mobilidade </p>`
    } if (getSelectedValue == 'Leona') {
        build.innerHTML =`Para ${getSelectedValue}, a melhor build é: <p>Itens Iniciais: Escudo Relicário  e 2 Poções de Vida</p>
             <p>Evoluir o Escudo Relicário > Juramento do Cavaleiro > Convergência de Zeke > Solari > Redenção </p> <p>Bota: Botas da Mobilidade </p>`
    }
        
    

}