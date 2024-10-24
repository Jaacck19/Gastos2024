//variables para los selectores 

const formulario = document.getElementById('agregar-gastos');
const listadog = document.getElementById('#gastos ul');


//creacion de eventos
addEventListener();
function addEventListener(){
    document.addEventListener('DOMContentLoaded',preguntarpresupuesto);
    formulario.addEventListener('submit',agregarGatos);
}


//crear la clase principal
class Presupuesto
{
    constructor(presupuesto)
    {
        this.Presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto); 
        this.gatos = [];
    }

    nuevoGastos(gasto){
        this.gastos = [... this.gastos,gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        
    }

}
//clase que maneja la interfaz de usuario 
class UI
{
    insertarpresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.presupuesto;
    }
    ImprimirAlert(){

        //crear el div
        const divmensaje = document.createElement('div');
        divmensaje.classList.add('text-center','alert');

        //si es de tipo error se debe agregar a la clase
        if(tipo==='error'){
            divmensaje.classList.add('alert-danger');
        }else{
            divmensaje.classList.add('alert-primary');
        }
        //mensaje de error
        divmensaje.textContent = mensaje;
        //insertar en el DOM
        const contenidoPrincipal = document.querySelector('.contenido')
        document.querySelector('.contenido-principal'.insertBefore(divmensaje,formulario));

        //programar el tiempo que dura la alerta
        setTimeout(()=>{
            document.querySelector('.contenido-principal .alert').remove();
        },3000);

    }



    //insertar el gasto en la lista
}

//crear un objeto de la clase UI
const ui = new UI();
let presupuesto;

function preguntarpresupuesto(){
    const valorpre = promt('Ingresar el valor del presupuesto');

    //validar lo ingreso por el usuario
    if(valorpre === ''|| valorpre===nul || isNaN(valorpre || valorpre <=0))
      {
        window.location.reload();
      }
    //presupuesto es valido 
    presupuesto = new Presupuesto(valorpre);

    console.log(valorpre);
    //mostrar en el html el valor del presupuesto ingresado 
    ui.insertarpresupuesto(presupuesto);
}
//leer lo registrado en el formulario
function agregarGasto(e){
    e.preventDefaul();

    //definir las variables del formulario
    const Nombre = document.querySelector('#gastos').value;
    const Valor = Number(document.querySelector('#cantidad').value);

    //validar los campos el formulario
    if(Nombre==='' || Valor===''){

           ui.ImprimirAlert('Ambos campos son obligatorios','error');
        // return;
        }else if(Valor < 0 || isNaN(Valor)){
            ui.ImprimirAlert('El valor no es correcto','error');
        }
        
        
}
