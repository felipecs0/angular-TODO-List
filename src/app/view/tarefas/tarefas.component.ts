import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from 'src/app/shared/cadastro/models/tarefas';
import { TarefasService } from 'src/app/shared/cadastro/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private tarefasService:TarefasService) { }
  tarefas!:Tarefas[]

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.tarefasService.getAll().subscribe(
      tarefas => {this.tarefas = tarefas},
      error => console.log(error)
    )
  }

  concluir(tarefa:Tarefas){
    tarefa.status = !tarefa.status
    this.tarefasService.put(tarefa).subscribe({
      next: () => {console.log('Editado com sucesso')}
    })
  }

  deleteID(id:number){
    this.tarefasService.deleteById(id).subscribe({
      next: () => {console.log('Deletado com sucesso');
    this.getAll();
    },
    error: err => console.log('Error', err)
  })
}

}
