import CredencialsProvider from 'next-auth/providers/credentials'


export const NEXT_AUTH2 = {
   providers : [
    CredencialsProvider( {
        name: 'credentials',
        credentials : {
            username: {label: 'Email', type: 'text', placeholder: 'email'},
            password: {label: 'Password', type: 'password', placeholder: 'password'},
            otp : {label: 'OPT' , type: 'number', placeholder: 'otp'}
        },
        async authorize(credentials: any) {
            console.log(credentials);
            return {
                id: '123',
                email: 'shani@gmail.com',
                name: 'shani yadav'
            }
        }
    })
   ],
   secret : process.env.NEXTAUTH_SECRET,
   callbacks: {
    session : ({session, token, }: any) => {
            if (session && session.user) {
                session.user.id = token.sub
            }
            return session
    }
   }
}