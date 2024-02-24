import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'

// const app = new Hono()
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	}
}>();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('api/v1/signin',async (c)=>{
  const prisma = new PrismaClient({
    // can add ts-ignore
    // datasourceUrl: c.env.DATABASE_URL,
    datasourceUrl: c.env.DATABASE_URL,

  }).$extends(withAccelerate())
  const body = await c.req.json();

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password : body.password
      }
    })

    const jwt = await sign({id:user},c.env.JWT_SECRET);
    return c.json({jwt : jwt});

})
app.post('api/v1/signup',(c)=>{
  return c.text('');
})
app.post('api/v1//blog',(c)=>{
  return c.text('');
})
app.put('api/v1/blog',(c)=>{
  return c.text('');
})
app.get('api/v1/blog/:id',(c)=>{
  return c.text('');
})

export default app
