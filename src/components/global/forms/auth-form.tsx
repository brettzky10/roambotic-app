"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./auth-sign-in-form";
import RegisterForm from "./register-auth-form";
import OAuthForm from "./auth-o-auth-form";

export function AuthForm() {
	return (
		<div className="w-full space-y-5 bg-zinc-900 p-3 rounded-md">
			<Tabs defaultValue="signin" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="signin">SignIn</TabsTrigger>
					<TabsTrigger value="register">Register</TabsTrigger>
				</TabsList>
				<TabsContent value="signin">
					<SignInForm />
				</TabsContent>
				<TabsContent value="register">
					<RegisterForm />
				</TabsContent>
			</Tabs>
			<OAuthForm/>
		</div>
	);
}