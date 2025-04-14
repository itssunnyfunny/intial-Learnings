import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../lib/auth";
import { NEXT_AUTH2 } from "../lib/auth2";

export default async function() {
    const session = await getServerSession(NEXT_AUTH2);
    return <div>
        {JSON.stringify(session)}
    </div>
}