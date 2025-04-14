import { NEXT_AUTH } from "@/app/lib/auth";
import { NEXT_AUTH2 } from "@/app/lib/auth2";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";




const handler = NextAuth(NEXT_AUTH2);

export const GET = handler;

export const POST = handler;