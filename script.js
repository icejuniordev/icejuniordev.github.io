function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
        if (fano.value.lenght == 0 || Number(fano.value) > ano) { 
            window.alert('Verifique os dados e tente novamente')
        } else { 
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
                if (fsex[0].checked) { 
                    gênero = 'Homem'
                    if (idade >= 0 && idade < 10) { 
                        // CRIANÇA
                        img.setAttribute('src', 'bebemen.png')
                    } else if (idade < 21) { 
                        // JOVEM
                        img.setAttribute('src', 'jovemhomem.png')
                    } else if (idade < 50) { 
                        // ADULTO
                        img.setAttribute ('src', 'adultohomem.png')
                    } else { 
                        // IDOSO
                        img.setAttribute ('src', 'senhorhomem.png')
                    }
                } else if (fsex[1].checked) { 
                    gênero = 'Mulher'
                    if (idade >= 0 && idade <10) { 
                        //CRIANÇA
                        img.setAttribute('src', 'bebefem.png')
                    } else if (idade < 21) { 
                        //JOVEM
                        img.setAttribute('src', 'jovemmulher.png')
                    } else if (idade <50 ) { 
                        //ADULTO
                        img.setAttribute('src', 'adultamulher.png')
                    } else { 
                        //IDOSO
                        img.setAttribute('src', 'senhoramulher.png')
                    }

                }
                res.style.textAlign ='center'
                res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
                res.appendChild(img)
        }

}