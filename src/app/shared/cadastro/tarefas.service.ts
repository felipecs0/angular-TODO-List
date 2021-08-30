import { API_Url, API_EndPoint } from './../../../environments/environment';
import { Tarefas } from './models/tarefas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {

constructor(private http:HttpClient) { }

  getAll():Observable<Tarefas[]>{
    return this.http.get<Tarefas[]>(`${API_Url}${API_EndPoint}`)
  }
  deleteById(id:number):Observable<Tarefas>{
    return this.http.delete<Tarefas>(`${API_Url}${API_EndPoint}/${id}`);
  }
  post(tarefas:Tarefas):Observable<Tarefas>{
    return this.http.post<Tarefas>(`${API_Url}${API_EndPoint}`, tarefas);
  }
  put(tarefa:Tarefas):Observable<Tarefas>{
    return this.http.put<Tarefas>(`${API_Url}${API_EndPoint}/${tarefa.id}`, tarefa);
  }

}
