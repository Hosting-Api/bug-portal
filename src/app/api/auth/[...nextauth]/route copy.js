//  src/app/api/auth/[...nextauth].js

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/app/lib/mongodb";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import { getToken } from "next-auth/jwt"

// export const CustomSession = {
//     user: CustomUser,
//     expires: string,
// }
// export const CustomUser = {
//     id: String | null,
//     name: String | null,
//     email: String | null,
//     role: String | null,
// };

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

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
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};