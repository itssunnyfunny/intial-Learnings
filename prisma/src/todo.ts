import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// async function Todo(title:string, description:string, userId:number) {
//     try {
//         const res = await prisma.todo.create({
//             data:{
//                 title: title,
//                 description: description,
//                 userId: userId
//             },
//             select:{
//                 title: true,
//                 description: true,
//                 userId: true,
//                 user: true
//             }
//         });

//         console.log(res);
        
//     } catch (error) {
//         console.error("in Todo creation",error);
        
//     }
// }

// Todo('its second title for second user', 'description for second user todo 2', 2);



// async function updatTodo(description:string, id: number) {
//      try {
//         const res = await prisma.todo.update({
//            where: {id: id},
//             data: {
//                 description: description
//             },
//             select: {
//                 id: true,
//                 title: true,
//                 description: true,
//                 done: true
//             }
//         })
//         console.log(res);
        
//      } catch (error) {
//         console.error("error in updating the todo",error);
        
//      }
// }

// updatTodo(' 2 updated description', 2)





// async function getTodo(userId:number) {
//     try {
//         const res  = await prisma.todo.findMany({
//             where: {userId: userId},
//             select: {
//                 userId: true,
//                 title: true,
//                 description: true,
//                 done: true,
//                 user:true
//             }
//         })
//         console.log(res);
        
//     } catch (error) {
//         console.error("geting Todo ", error);
        
//     }
// };

// getTodo(2)
  

async function deleteTodo( id:number) {
    try {
        const res = await prisma.todo.delete({
            where: {id : id},
            select: {
                id : true,
                title: true,
                description: true,
                userId: true
            }
        });
        console.log(res);
        
    } catch (error) {
        console.error("try to delete todo", error);
        
    }
}

deleteTodo(2)