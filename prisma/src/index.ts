import { PrismaClient } from "@prisma/client";
import { log } from "console";
const prisma = new PrismaClient();


 async function insertUser(email:string, firstName: string, lastName: string, password: string ) {
 const res = await   prisma.user.create({
        data : {
            email,
            firstName,
            lastName,
            password
        },
        select: {
            id : true,
            email: true,
            firstName: true,
            password: true
        }
    })
    console.log(res);
    
};

insertUser('user3@gmail.com', 'user3', 'last3', '4444')

// update 
// interface dataUpdate{
//      lastName:string
//      password: string
// }

// async function updateUser(email:string ,{lastName, password}: dataUpdate) {
//     const update =  await prisma.user.update({
//         where:{email: email},
//         data:{
//              password,
//             lastName
//         },
//         select: {
//             id: true,
//             firstName: true,
//             lastName: true,
//             password: true

//         }
//     })
//     console.log(update);
    
// };
// updateUser('user2@gmail.com',{lastName: 'user2last', password: '33332'})

// // get the data

// async function getUser(email:string) {
//     const data = await prisma.user.findUnique({
//         where: {email: email},
//         select:{
//             id: true,
//             email: true,
//             firstName: true,
//             lastName: true,
//             password: true
//         }
//     });
//     console.log(data);
    
// };

// getUser('user2@gmail.com');


// // delete 
//  async function deleteUser(email:string) {
//     const deleteU = await prisma.user.delete({
//         where: {email: email},
//         select: {
//             firstName: true,
//             id: true,
//             lastName: true
//         }
//     });
//     console.log(deleteU);
    
//  }

//  deleteUser('user1@gmail.com');

