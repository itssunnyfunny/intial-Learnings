import {PrismaClient} from '@prisma/client';
const client = new PrismaClient();


interface bodyObj {
    title: string,
    description: string,
    done: boolean,
    userId : number
}
// user can create a todo 
 export async function createTodo(userId:any, body: bodyObj) {
    try {
        const res = await client.todo.create({
            data: {
                userId: body.userId,
                title: body.title,
                description: body.description,
                done: body.done
            },
            select: {
                id : true,
                title: true,
                description: true,
                done:true,
                userId: true
            }
        })
        return res
    } catch (error) {
        return error
    }
}

// user can get all todo 
 export async function getTodo(userId:number) {
    try {
        const res = await client.todo.findMany({
            where: {userId: userId},
            select: {
                id: true,
                title: true,
                description: true,
                done: true,
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

// user can edit todo
interface udtype {
    title?: string,
    description?: string,
    done? : boolean
}
export async function updateTodo(id:number, body: udtype) {
    try {
        const res = await client.todo.update({
            where: {id: id},
            data: {
              title : body.title,
              description: body.description,
              done: body.done
            },
            select: {
                id : true,
                title: true,
                description: true,
                done: true,
                userId: true
            }
        });
        return res
    } catch (error) {
        return error
    }
}

// user can delete todo
 export async function deleteTodo(id:number) {
    try {
        const res = await client.todo.delete({
            where: {id: id},
            select: {
                title: true,
                description: true,
                done: true,
                userId: true
            }
        })
        return res
    } catch (error) {
        return error
    }
}
