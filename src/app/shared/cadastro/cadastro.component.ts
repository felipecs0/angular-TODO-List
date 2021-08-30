import { TarefasService } from 'src/app/shared/cadastro/tarefas.service';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from './models/tarefas';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroTarefa!: FormGroup;


  constructor(private tarefasService:TarefasService,
              private fb:FormBuilder) { }

  ngOnInit() {
    this.cadastroTarefa = this.fb.group({
      tarefa:['',[Validators.required]],
      status:[false,[Validators.required]]
    })
  }

  cadastrar(){
    this.tarefasService.post(this.cadastroTarefa.value).subscribe(
      result =>{console.log('sucess', result)}
    )
    window.location.reload();
  }


}


