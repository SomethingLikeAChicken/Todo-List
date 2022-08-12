import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<Todo> = [];
  inputTodo:string ="";
  todosIsEmpty = false;
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first-Todo',
        completed: false
      },
      {
        content: 'second-Todo',
        completed: true
      }
    ]
  }
  toggleDone(id : number){
    this.todos.map((v, i) =>{
      if(i == id) v.completed = !v.completed;
      return v;
    })
  }
  deleteToDo(id : number){
    this.todos = this.todos.filter((v, i) => i != id);
  }
  addTodo(){
    
    this.todos.push({
        content: this.inputTodo,
        completed: false
      })
      this.inputTodo = "";
    
  }
  deleteAll(){
    for(let i = 0; i <= this.todos.length; i++){
      this.todos.splice(i, this.todos.length);
    }
  }
}
