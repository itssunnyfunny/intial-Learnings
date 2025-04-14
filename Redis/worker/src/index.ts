import {createClient} from 'redis'


 const client = createClient();

 
 async function main() {
    await client.connect();
    while (true) {
        const response = await client.brPop("submission",0);
        // run the users code in a docker container
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        console.log("Processed users submissions", response);
        
    }
 }

 main()

 