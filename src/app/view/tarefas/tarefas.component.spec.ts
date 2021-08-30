/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TarefasComponent } from './tarefas.component';
import { Tarefas } from 'src/app/shared/cadastro/models/tarefas';

describe('TodosComponent', () => {
  let component: TarefasComponent;
  let fixture: ComponentFixture<TarefasComponent>;

  const mockItem: Tarefas = {
    id: 2,
    tarefa: 'ProjectTest',
    status: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      declarations: [ TarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Deve realizar a mudanca de status da tarefa para concluido`, () =>{
    component.concluir(mockItem);
    expect(mockItem.status).toEqual(true);
  })
});
