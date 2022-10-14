import { Router } from 'express';

const categoiresRoutes = Router();

const categories = [];

categoiresRoutes.post("/categories",(request,response)=>{
  const { name, description } = request.body;


  categories.push({
    name,
    description
  })

  return response.status(201).send()
})


export {categoiresRoutes}