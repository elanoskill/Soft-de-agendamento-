const btnCriar = document.querySelector('#criar');
const modalConta = document.querySelector('.modal');
const btnEntrar = document.querySelector('#entrar');
const alertaErro = document.querySelector('.mostrar');
const username = document.querySelector('#user');
const senha = document.querySelector('#senha');
const formLogin = document.querySelector('#form');
const nome = document.querySelector('#NomeCriar');
const usernamecriar = document.querySelector('#userCriar');
const senhaCriar = document.querySelector('#senhaCriar');
const formLCriar = document.querySelector('#form-criar');
//adicionar o modal criar conta na tela
btnCriar.addEventListener('click',()=>{
    modalConta.classList.add('mostrar');
});
//remover o modal criar conta na tela
btnEntrar.addEventListener('click',()=>{
    modalConta.classList.remove('mostrar');
    
})
//formulario login
formLogin.addEventListener('submit', (e)=>{
    e.preventDefault();
    data={
        nome:username.value,
        senha:senha.value
     }
     console.log(data);

})

//formulario criar conta 
formLCriar.addEventListener('submit',(e)=>{
    e.preventDefault();
    data={
        nome:nome.value,
        user:usernamecriar.value,
        password:senhaCriar.value,
    }
console.log(data)
}
)

