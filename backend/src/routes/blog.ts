import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify } from 'hono/jwt'
import { createBlogInput,updateBlogInput } from "@100xshiv/medium-common";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables : {
        userId : string
    }
}>();


blogRouter.use('/*',async(c,next)=>{
    
    try{
        const token = c.req.header('Authorization');
        console.log('token: ',token);
        const user = await verify(token || '',c.env.JWT_SECRET);
        console.log('user####',user);
        if(user){
            //main task was to assing the user id to c.set('userId') so that we can access that afterwords
            c.set('userId' ,user.id)
            await next();
            console.log('User Id: ',c.get('userId'));
        }
        }catch(e){
        c.status(403);
        return c.json({
            msg: 'You are not logged IN'
        })
    }
})

blogRouter.post('/', async (c)=>{
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    
    if(!success){
        c.status(411);
        return c.json({
            msg: 'Invalid Input For Blog!'
        })
    }
    const userId = c.get('userId');
    console.log('user id 2 : ',userId);
    
    try {
        const blog = await prisma.post.create({
            data:{
                title: body.title,
                content :body.content,
                authorId : userId
            }
        })
        return c.json({
            id : blog.id
        })    
    } catch (e) { 
        c.status(411);
        return c.json({
            msg: "Error while Creating Blog post",
            e: e
        })        
    }

})
blogRouter.put('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

        }).$extends(withAccelerate())
    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    console.log('########sucess',success);
    if(!success){
        c.status(411);
        c.json({
            msg: 'Invalid Input For Updating Blog'
        })
    }
    try{
        const blog = await prisma.post.update({
            where:{
                id : body.id
            },
            data: {
                title:  body.title,
                content: body.content
            }
        })
        return c.json({
            blog
        })
    }
    catch(e){
        c.status(411);
        return c.json({
            msg: "Error while Updating post!"
        })
    }
})

blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const blog = await prisma.post.findMany();
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.json({
            msg: 'Not Found Posts'
        })
    }
})

blogRouter.get('/:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

        }).$extends(withAccelerate())

    const id = c.req.param('id');
    try{
        const blog = await prisma.post.findFirst({
            where:{
                id : id
            }
        })
        return c.json({
            blog
        })
    }catch(e){
        c.status(411);
        return c.json({
            msg : 'Not Found'
            
        })
    }
    
})

