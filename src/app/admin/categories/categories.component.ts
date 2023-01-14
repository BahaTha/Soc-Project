import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Categorie } from "src/app/categorie";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private categoryService: CategoryService, private router:Router) { }
  ngOnInit(): void {
    this.retrieveCategories();
  }
  editpressed=false;
  category: Categorie= new Categorie();
  categories:any;
  categoryAdd(){

  }
  validateUser(cat:Categorie){

  }
  deleteCategory(cat:Categorie){
    //this.categoryService.delete(cat.id);
  }
  modifyUser() {
    this.editpressed=true;
  }
  updateCategoryName() {
    
  }
  onReset(){
    this.editpressed=false;
  }
  retrieveCategories(): void {
    // this.categoryService.getAllCategory()
    //   .subscribe(
    //     data => {
    //       this.categories = data;
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }
}
