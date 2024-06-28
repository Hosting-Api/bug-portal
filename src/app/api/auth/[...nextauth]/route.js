//  src/app/api/auth/[...nextauth].js

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import { getToken } from "next-auth/jwt"


// export const CustomUser = {
//     id: String | null,
//     name: String | null,
//     email: String | null,
//     role: String | null,
// };
// export const CustomSession = {
//     user: CustomUser,
//     expires: String,
// }


const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                
            },

            // async jwt({ token, user }) {
            //     if (user) {
            //         user.role = user?.role == 'null' ? "user" : user?.role;
            //         token.user = user;
            //     }
            //     return token;
            // },
            // async session({ session, user, token }) {
            //     return session
            // },

            async authorize(credentials){
                // const user = {id: "1"};
                const { email, password } = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email});

                    if (!user) {
                        return null;    
                    }
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    if (!passwordsMatch) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },


          
           

           

            
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
          if(user) token.role = user.role
          return token
        },
        session({ session, token }) {
          session.user.role = token.role
        //   session.user.team = token.team
          return session
        }
      },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {     
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};