import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signUpInput,signInInput } from "@100xshiv/medium-common";

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
      // can add ts-ignore
      // datasourceUrl: c.env.DATABASE_URL,
      datasourceUrl: c.env.DATABASE_URL,
  
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success } = signUpInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        msg: "invalid input"
      })
    }
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password : body.password,
          name : body.name
        } 
      })
      const jwt = await sign({id:user},c.env.JWT_SECRET);
      return c.json({jwt : jwt});
    } catch (error) {
      c.status(411);
      return c.json({
        msg:'Invalid cred'
      })
    }
    
  
  })
  userRouter.post('/signin',async(c)=>{
    const prisma = new PrismaClient({
      // can add ts-ignore
      // datasourceUrl: c.env.DATABASE_URL,
      datasourceUrl: c.env.DATABASE_URL,
  
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const {success} = signInInput.safeParse(body);

    if(!success){
      c.status(411);
      return c.json({
        msg : 'Invalid Input passed!'
      })
    }

  
    try{
      const findUser = await prisma.user.findUnique({
        where : {
          email: body.email,
          password : body.password
        }
      })
    
      if(findUser){
        const jwt = await sign({ id: findUser.id }, c.env.JWT_SECRET);
          return c.json({ jwt });
      }
    }catch(e){
      c.status(403);
      return c.json({
        msg: "invalid credentials"
      })
    }
  })