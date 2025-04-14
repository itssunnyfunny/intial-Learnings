 import {Client} from 'pg'

 // write the code to connect to postgres database using typescript 


 const client = new Client({
    connectionString: ""
 });

//  async function maketable() {
//    await client.connect();
//    const query = `CREATE TABLE IF NOT EXISTS  users (
//     id SERIAL PRIMARY KEY,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     firstName VARCHAR(255) NOT NULL,
//     lastName  VARCHAR(255) NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//    )`;

//    const res = await client.query(query);
//    console.log(res);
   
// }

// maketable();

//  async function insertion(firstName: string,lastName:string, email: string, password: string) {
//     try {
//        await client.connect();
//        const better = `INSERT INTO users (email, firstName, lastName, password) VALUES ($1, $2, $3, $4)`;
//        const value = [email,firstName, lastName, password]
//        const res = await client.query(better, value);
//         console.log( 'Insertion successful', res);
         
//       } catch (error) {
//          console.error('Error during the insertion',error);
         
//       } finally {
//        await client.end()
//       }
//  }
   
//  insertion('my2@email.com','myname2', 'lastName2', '222222');

 

//  async function addresses() {
//    try {
//       await client.connect();
//       const query = `CREATE TABLE addresses(
//          id SERIAL PRIMARY KEY,
//          user_id INTEGER NOT NULL,
//          city VARCHAR(100) NOT NULL,
//          country VARCHAR(100) NOT NULL,
//          pincode VARCHAR(20),
//          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//          FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
//        )`;
//       const res = await client.query(query)
//       console.log(res);
      
//    } catch (error) {
//       console.error("something went wrong during addresses creation",error);
      
//    } finally {
//     await  client.end()
//    }
//  }

//  addresses();

// data insertion in addresses
async function InsertAddress(user_id:number, city: string, country: string, pincode: number) {
    try {
      await client.connect();
      const query = `INSERT INTO addresses (user_id, city, country, pincode) VALUES ($1, $2, $3, $4)`;
      const res = await client.query(query,[user_id, city, country, pincode])
      console.log(res);
      
    } catch (error) {
      console.error("Error in Insertion ",error);
      
    } finally {
       await client.end()
    }
};
  


InsertAddress(1,"mumbai","India",122203)