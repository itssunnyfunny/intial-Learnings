// write a function to create a users table in your databases

import {Client} from 'pg'

const client = new Client ({
    connectionString : "postgres://postgres:password@localhost:5432/postgres"
})
 


// async function createUsersTable() {
//       await client.connect();
//     const result = await client.query(`
//          CREATE TABLE users (
//          id SERIAL PRIMARY KEY,
//          username VARCHAR(50) UNIQUE NOT NULL,
//          email VARCHAR(255) UNIQUE NOT NULL,
//          password VARCHAR(255) NOT NULL,
//          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//          );
//         `)
//         console.log(result);
        
// }

// createUsersTable();


// async function insertData() {
//     try {
//         await client.connect(); // ensure client connection is established
//         const insertQuery = `INSERT INTO users (username, email, password) VALUES ('username1', 'user1@example.com', 'user1pass')`;
//      
//         const res = await client.query(insertQuery);
//         console.log('Insertion success', res); // output insertion result
        
//     } catch (error) {
//         console.error('Error during the insertion', error)
//     } finally {
//         await client.end(); // close the client connection
//     }
// };

// insertData();


// right way to do insertions 
  // async function insertion(username: string, email: string, password: string) {
  //   try {
  //       await client.connect();
  //       const better = `INSERT INTO users (username , email , password) VALUES ($1, $2, $3)`;
  //       const value = [username, email, password]
  //       const res = await client.query(better, value);
  //        console.log( 'Insertion successful', res);
         
  //      } catch (error) {
  //        console.error('Error during the insertion',error);
         
  //      } finally {
  //       await client.end()
  //      }
  // }
   
  // insertion('myname2', 'my2@email.com', '22222')

// async function getUser(email: string) {
//     await client.connect();
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const result = await client.query(query, [email]);

//     if (result.rows.length > 0) {
//         console.log('user found', result.rows[0]);
//         return result.rows[0];
//     } else {
//         console.log('No user found with the given email');
//         return null;
//     }
// }

//  getUser('user1@example.com').catch(console.error);

//  async function update(password:string,username: string) {
//        try {
//         await client.connect();
//         const query = `UPDATE users SET password = $1 WHERE username = $2`;
//         const result = await client.query(query,[password, username]);
//         console.log('user password updated', result.rowCount);
        
//         // if (result.rows.length >0) {
//         //     console.log(result.rows[0]);
//         //     return result.rows[0]
//         // } else {
//         //     console.log('user not found with the given id');
//         //     return null;
//         // }
//        } catch (error) {
//            console.error('something went wrong ', error);
           
//        } finally {
//         await client.end()
//        }
//  }


//  update('1234321','username1')

// delete

// async function deleteData(email:string) {
//    try {
//     await client.connect();
//     const query = `DELETE FROM users WHERE email = $1`
//     const res =  await client.query(query,[email])
//     console.log('user successfully ', res);
    
//    } catch (error) {
//     console.error('something went wrong during deletation',error);
//      throw error;
//    } finally {
//      client.end()
//    }
// }


// deleteData('my@email.com')