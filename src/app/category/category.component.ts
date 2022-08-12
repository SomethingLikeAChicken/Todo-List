import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Array<Category> = [];
  inputCategory : string = ""; 
  inputDescription : string = "";
  constructor() { }

  ngOnInit(): void {
  }
  addCategory(){
    this.categories.push({
      content: this.inputCategory,
      description: this.inputDescription
    })
    this.inputCategory = "";
    this.inputDescription = "";
  }

}
