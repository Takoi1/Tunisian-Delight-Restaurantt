import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id )!;

  }



  // getAllFoodsByTag(tag: string): Food[] {
  //   return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  // }
  getAllFoodsByTag(tag: string): Food[] {
    const lowercaseTag = tag.toLowerCase();
    const filteredFoods = lowercaseTag === "all" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(lowercaseTag));
    return filteredFoods;
  }
/*
  //debug the eroor for sensitive case
  Angular's default routing behavior is case-insensitive, so URLs like /tag/All and /tag/all are treated the same,
   but in my tag comparison seems to be case-sensitive.
*/


  getAllTags():Tag[]{
    return[
      {name:"all", count :20},
      {name:"spicy", count :4},
      {name:"desserts", count :4},
      {name:"salads", count :2},
      {name:"light", count :5},
      {name:"heavy", count :5},


    ];
  }

  getAll():Food[]{
    return[
     {
      id:1,
      name:'Couscous ',
      price:20,
      cookTime:'40-60',
      favorite:true,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/couscous2.jpg',
      tags:['spicy','heavy']
     },
     {
      id:2,
      name:'Mloukhia ',
      price:10,
      cookTime:'12-20',
      favorite:true,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/ml.jpg',
      tags:['spicy','heavy']
     },
     {
      id:3,
      name:'Pasta ',
      price:15,
      cookTime:'12-20',
      favorite:true,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/pasta.jpg',
      tags:['spicy','heavy']
     },
     {
      id:4,
      name:'Salad Blankit ',
      price:8.5,
      cookTime:'12-20',
      favorite:false,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/blankit.jpg',
      tags:['salads','light']
     },
     {
      id:5,
      name:'Lablebi ',
      price:4.5,
      cookTime:'12-20',
      favorite:false,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/lablebi.jpg',
      tags:['spicy','light']
     },
     {
      id:6,
      name:'Kaak Warka ',
      price:45,
      cookTime:'50-60',
      favorite:false,
      origins:['Tunisian','Zaghouan'],
      stars:3.3,
      imageUrl:'/assets/images/foods/kaak.jpg',
      tags:['desserts','light']
     },
     {
      id:7,
      name:'Dates ',
      price:22,
      cookTime:'10-20',
      favorite:false,
      origins:['Tunisian','Tozeur'],
      stars:3.3,
      imageUrl:'/assets/images/foods/dates.jpg',
      tags:['desserts','light']
     },
     {
      id:8,
      name:'Baklawa ',
      price:65,
      cookTime:'60-90',
      favorite:false,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/baklawa.jpg',
      tags:['desserts','heavy']
     },
     {
      id:9,
      name:'Makroudh ',
      price:11,
      cookTime:'60-90',
      favorite:false,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/makroud.jpg',
      tags:['desserts','heavy']
     },
     {
      id:10,
      name:'Salad Meshwia ',
      price:7.5,
      cookTime:'60-90',
      favorite:false,
      origins:['Tunisian','All Regions'],
      stars:3.3,
      imageUrl:'/assets/images/foods/msh.jpg',
      tags:['salads','light']
     }

    ]
  }
}
