import { Client } from "pg";
//  
const client = new  Client({
    connectionString : "postgres://postgres:password@localhost:5432/postgres"
   
});

// making a table 
async function maketable() {
    await client.connect();
    const query = `CREATE TABLE IF NOT EXISTS users (
     id SERIAL PRIMARY KEY
     email VARCHAR(255) UNIQUE NOT NULL
     firstName VARCHAR(255) NOT NULL
     lastName  VARCHAR(255) NOT NULL
     password VARCHAR(255) NOT NULL
     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;

    const res = client.query(query);
    console.log(res);
    
}

maketable();

// INSERT USER
interface insertionType {
    email: string
    firstName : string
    lastName: string
    password: string
}

async function insertion({email, firstName, lastName, password}:insertionType) {
   try {
    await client.connect();
    const query = `INSERT INTO users (email, firstName , lastName , password) VALUE ($1,$2, $3, $4)` 
    const result = await client.query(query,[email, firstName, lastName, password]);
    console.log(result);
    
   } catch (error) {
     console.log('something went  wrong during insertion',error);
     
   } finally {
    client.end()
   }
}

insertion({email: 'user@gmail.com', firstName: 'user', lastName: 'userlast', password: '333221'})

// get user

async function getUser(email:string) {
 try {
    await client.connect();
    
    const query = `SELECT * WHERE email = $1`;
    const result =  await client.query(query, [email]);
    if (result.rows.length > 0) {
        console.log('user find',result.rows[0]);
        
    } else {
        console.log('user not found with the given email');
        
    }
 }  catch (error) {
    console.log('something went  wrong during geting the user',error);
    
  } finally {
   client.end()
  }
};


getUser('user@gmail.com');


// update the user's info
interface updateType {
    lastName: string
    password: string
}

async function updateUser(email:string, {lastName, password}:updateType) {
      try {
        await client.connect();
        const query = `UPDATE users SET lastName = $2 password = $3 WHERE = $1`;
        const result = client.query(query,[email,{lastName, password}])
        console.log( result);

    } catch (error) {
        console.log('something went  wrong during updating',error);
        
      } finally {
       client.end()
      }
       
}; 


updateUser('user@gmail.com',{lastName: 'updatedlast', password: '42431'})


// deleting the user

async function deletation(email:string) {
  try {
    await client.connect()
    const query = `DELETE FROM users WHERE email = $1`
    const msg = client.query(query,[email]);
    console.log(msg);
} catch (error) {
    console.log('something went  wrong during deletation',error);
    
  } finally {
   client.end()
  }
    
} 

deletation('user@gmail.com')