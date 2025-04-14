import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH =  {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: 'Username', type: 'text', placeholder: "email"},
                password: {label: "password", type: 'password', placeholder: 'password'}
            },
            async authorize(credentials: any) {
                console.log(credentials);
                // db checks and validations
                return {
                    id: '12',
                    name: "shani uadav",
                    email: 'shani@gmail.com'
                }
            },
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,
    callbacks: {
       session: ({session, token, user}: any) => {
             if ( session && session.user) {
                session.user.id = token.sub
             }
        return session
       }
    }
}