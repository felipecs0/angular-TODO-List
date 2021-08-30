import { API_EndPoint } from './../../../environments/environment';
/* tslint:disable:no-unused-variable */

import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { TarefasService } from './tarefas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Tarefas } from './models/tarefas';
import { API_Url } from 'src/environments/environment';

describe('Service: Tarefas', () => {

  let service: TarefasService;
  let httpMock: HttpTestingController

  const mockItem: Tarefas = {
    id: 2,
    tarefa: 'ProjectTest',
    status: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarefasService]
    });
    service = TestBed.get(TarefasService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Deve buscar uma lista de itens do servidor', () => {
    service.getAll().subscribe((Response:any[]) =>{
      expect(Response.length).toEqual(1);
    });

    const httpRequest = httpMock.expectOne(`${API_Url}${API_EndPoint}`);

    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.responseType).toEqual('json')

    httpRequest.flush([mockItem])

  });

  it('Deve Enviar um item através do metodo POST', () => {

    service.post(mockItem).subscribe((Response:any) =>{
      expect(Response.lenght).toEqual(1)
    });

    const httpPost = httpMock.expectOne(`${API_Url}${API_EndPoint}`);

    expect(httpPost.request.method).toEqual('POST');
    expect(httpPost.request.responseType).toEqual('json')

  });

  it('Deve deletar um item através do metodo DELETE', () => {

    service.deleteById(mockItem.id).subscribe((Response:any) =>{
      expect(Response.lenght).toEqual(1)
    });

    const httpPost = httpMock.expectOne(`${API_Url}${API_EndPoint}/${mockItem.id}`);

    expect(httpPost.request.method).toEqual('DELETE');
    expect(httpPost.request.responseType).toEqual('json')

  });

  it('Deve realizar uma atualizacao em um item através do metodo PUT', () => {

    service.put(mockItem).subscribe((Response:any) =>{
      expect(Response.lenght).toEqual(1)
    });

    const httpPost = httpMock.expectOne(`${API_Url}${API_EndPoint}/${mockItem.id}`);

    expect(httpPost.request.body).toEqual(mockItem)
    expect(httpPost.request.method).toEqual('PUT');
    expect(httpPost.request.responseType).toEqual('json')

  });

  it('should ...', inject([TarefasService], (service: TarefasService) => {
    expect(service).toBeTruthy();
  }));
});
