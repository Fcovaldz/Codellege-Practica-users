import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetitionService } from 'src/app/services/petition.service';
import { ValidarService } from 'src/app/services/validar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  form: FormGroup;
  creado: boolean = false;

  usuario = {
    id: '',
    nombre: '',
    trabajo: ''
  }

  constructor(private fb: FormBuilder, private validar: ValidarService, private peticion: PetitionService) {
    this.iniciarForm();
  }

  ngOnInit(): void {
  }
  
  get nombreVal(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }
  get empleoVal(){
    return this.form.get('empleo').invalid && this.form.get('empleo').touched;
  }
  get correoVal(){
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }

  get contraVal(){
    return this.form.get('contra').invalid && this.form.get('contra').touched;
  }

  get confirmaVal(){
    return (this.form.get('contra').value === this.form.get('confirma').value) ? false : true;
  }

  iniciarForm(){
    this.form = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(10)]],
      empleo: ['',[Validators.required, Validators.minLength(5),this.validar.noNinguno]],
      correo: ['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$')]],
      contra: ['',[Validators.required]],
      confirma: ['',[Validators.required]]
    },{
      validators: this.validar.validarPassword('code','confirma')
    });
  }

  enviarInfo(){
    if(this.form.valid){
      let name = this.form.get('nombre').value;
      let job = this.form.get('empleo').value;
      
      this.peticion.postUser(name,job).subscribe(data => {
        console.log(data);
        this.creado = true;
        this.usuario.id = data.id;
        this.usuario.nombre = data.name;
        this.usuario.trabajo = data.nam
      });
    }
    
  }

}