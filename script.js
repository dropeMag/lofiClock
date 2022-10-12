// let time = new Date()



function tempo(){
    // HORARIO
    let horas = document.getElementById('horas')
    let minut = document.getElementById('minut')
    let segun = document.getElementById('segun')
    
    let time = new Date()
    
    hours = time.getHours()
    minutes = time.getMinutes()
    seconds = time.getSeconds()

    horas.innerHTML = hours
    minut.innerHTML = minutes
    segun.innerHTML = seconds

    setTimeout('tempo()',500)

    // MENSAGEM
    let mensagem = document.getElementById('mensagem')
    if(hours >= 18){
        mensagem.innerHTML = 'Boa Noite'
    } else if(hours >= 12){
        mensagem.innerHTML = 'Boa Tarde'
    } else if(hours >= 6){
        mensagem.innerHTML = 'Bom Dia'
    } else if(hours >= 00){
        mensagem.innerHTML = 'Boa Madrugada'
    }
}