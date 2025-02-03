'use server'
import createSupabaseServerClient from "@/lib/supabase/server";
import { redirect } from "next/navigation";
//import { revalidatePath,unstable_noStore as noStore } from "next/cache";
import { headers } from "next/headers";
import prismadb from "../prismadb";
import { delay } from "framer-motion";



//AUTH
export async function signUpWithEmailAndPassword(data: {
    email: string;
    password: string;
    confirm: string;
  }) {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    /*
      const {
          data: { user },
      } = await supabase.auth.getUser();
  


     if(user){
    //Create owner
    const newOwner = await prismadb.owner.create({
      data: {
          user_id: user.id,
          email: user.email,
          //connectedAccountId: account.id,
          subscription: {
            create: {
              userId: user.id,
            },
          },
      },
    })
    } */
    
    return result;
  }
  
  export async function signInWithEmailAndPassword(data: {
    email: string;
    password: string;
  }) {
    const supabase = await createSupabaseServerClient();
    const result = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    return result;
  }
  
  export async function signOut(){
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect('/auth')
  }
  
  export default async function readUserSession() {
    const supabase = await createSupabaseServerClient();
    return supabase.auth.getSession();
  }
/* 
  export const signInWithGoogleOAuth = async () => {
    const origin = headers().get("origin");
    const supabase = createSupabaseServerClient();
    const { error, data } = await supabase.auth.signInWithOAuth({
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
      provider: "google",
    });
  
    if (error) {
      return redirect(`/login?message=${error.message}`);
    }
    return redirect(data.url);
  }; */
  
/* 
  export async function addNewOwner() {
    const supabase = await createSupabaseServerClient();

      const {
          data: { user },
      } = await supabase.auth.getUser();

    const findOwner = await prismadb.owner.findUnique({
      where: {
          user_id: user?.id,
          email: user?.email
      },
    })
    if(user && !findOwner){
    //Create owner
    const newOwner = await prismadb.owner.create({
      data: {
          user_id: user.id,
          email: user.email,
          //connectedAccountId: account.id,
          subscription: {
            create: {
              userId: user.id,
            },
          },
      },
    })
  }

    return ;
  } */