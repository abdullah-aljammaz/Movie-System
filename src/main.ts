import { User, Movie, Comment } from "@prisma/client";
import { connectDB, prisma } from "./config/db";
import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 3006;

app.use(express.json());
connectDB();

app.post("/user/create",async(req:Request,res:Response)=>{
  let Create_User = req.body as  User
  await prisma.user.create({
    data:Create_User
  })
  res.json(`User Is Created, Username: ${Create_User.username}`)
})

app.put("/user/update/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  let Update_User = req.body as  User
  await prisma.user.update({where:{id:id},data:Update_User}) 
  
})

app.get("/user/get_data",async(req:Request,res:Response)=>{
  const {id} = req.params
  let User_data = await prisma.user.findMany() 
  res.json(User_data)
})

app.get("/user/get_data/:id",async(req:Request,res:Response)=>{
    const {id} = req.params
    let User_data = await prisma.user.findMany({where:{id:id},select:{comments:true}}) 
    res.json(User_data)
})

app.delete("/user/delete/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  await prisma.user.delete({where:{id:id}}) 
  res.json("User Deleted")
})





// movies

app.post("/moive/create",async(req:Request,res:Response)=>{
  let Create_Movie = req.body as  Movie
  await prisma.movie.create({
    data:Create_Movie
  })
  res.json(`Movie Is Created`)
})
app.get("/movie/get_data",async(req:Request,res:Response)=>{
  let All_movies = await prisma.movie.findMany() 
  res.json(All_movies)
})


app.get("/movie/get_comments_only/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  let All_movies = await prisma.movie.findMany({where:{id:id},select:{comments:true}}) 
  res.json(All_movies)
})

app.get("/movie/get_comments/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  let All_movies = await prisma.movie.findMany({where:{id:id},select:{title:true,comments:true}}) 
  res.json(All_movies)
})

app.get("/movie/get_movie_rating/:rate",async(req:Request,res:Response)=>{
  const {rate} = req.params
  let All_movies = await prisma.movie.findMany({where:{rating:parseFloat(rate)}}) 
  res.json(All_movies)
})

// comment

app.post("/comment/add",async(req:Request,res:Response)=>{
  let Add_Comment = req.body as  Comment
  await prisma.comment.create({
    data:Add_Comment
  })
  res.json(`Comment Is Added`)
})

app.put("/comment/update/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  let Updated_Comment = req.body as Comment
  await prisma.comment.update({where:{id:id},data:Updated_Comment}) 
  res.json("Comment is Updated")
})

app.delete("/comment/delete/:id",async(req:Request,res:Response)=>{
  const {id} = req.params
  await prisma.comment.delete({where:{id:id}}) 
  res.json("Comment is Deleted")
})

app.listen(PORT, () => {
  console.log(`Server Listing ${PORT}`);
});
