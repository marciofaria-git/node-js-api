import { Router } from 'express';

import { Category } from '../model/Category';

const categoiresRoutes = Router();

const categories:Category[] = [];

categoiresRoutes.post("/",(request,response)=>{
  const { name, description } = request.body;
const category: Category = new Category()

Object.assign(category,{
  name,
  description,
  created_at: new Date()
})

  categories.push(category)

  return response.status(201).json({category})
})


export {categoiresRoutes}