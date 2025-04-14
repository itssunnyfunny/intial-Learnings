import {createClient} from 'redis'

const client = createClient();

async function redi() {
    await client.connect();
    while (true) {
        const res = await client.brPop("try",0);
        console.log("trying in the redis", res);
        
    }

 }

 redi()
