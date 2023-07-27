//Usando o switch case para determinar acesso

let perfilUsuario = true
let perfil = prompt

perfilUsuario = prompt('Informe o seu perfil: ')

switch (perfilUsuario) {

    case 'admin':
        console.log("Acesso a todos os módulos")
        break
    case 'supervisor':
        console.log("Acesso aos relatórios")
        break
    case 'desenvolvedor':
        console.log("Acesso a todos os módulos e tabelas")
        break
    case 'operador':
        console.log("Acesso a cadastros e movimentações")
        break
    default:
        console.log("Usuário sem acesso aos dados")
}