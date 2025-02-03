import React from "react";
import { AuthForm } from "@/components/global/forms/auth-form";
import readUserSession from "@/lib/actions/auth";
import { redirect } from "next/navigation";
//import { Icons } from "@/components/icons";
//import SplineComponent from "@/components/dashboard/spline-component";
//import Spline from "@splinetool/react-spline";


export default async function page() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/");
  }
  return (
    <>
      <>
        <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-screen overflow-hidden flex-col bg-muted p-10 text-white lg:flex dark:border-r ">
            <div className="absolute inset-0 bg-gradient-to-t from-[#111627] to-[#344378]" />
            <div className="relative z-20 flex items-center text-4xl font-medium">
              {/* <Icons.sunset className="h-20 w-20" /> */}
              <svg fill="#FFFFFF" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 512 512" xmlSpace="preserve"
                    className="h-6 w-6 mx-2"
                      /* style={{
                        animation: `spin 1.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite`,
                      }} */
              >
                      <g>
                        <g>
                          <path d="M322.783,145.931V33.391h16.696c9.22,0,16.696-7.475,16.696-16.696S348.699,0,339.478,0H172.522
                            c-9.22,0-16.696,7.475-16.696,16.696s7.475,16.696,16.696,16.696h16.696v112.54C117.7,172.912,66.783,241.82,66.783,322.783
                            C66.783,427.284,151.497,512,256,512c104.501,0,189.217-84.716,189.217-189.217C445.217,241.82,394.299,172.912,322.783,145.931z
                            M222.609,170.65v-25.954v-8.011V33.391h66.783v103.294v8.011v25.954c55.374,12.149,99.72,53.829,115.819,107.611H106.79
                            C122.889,224.48,167.235,182.798,222.609,170.65z M255.999,478.609c-85.924,0-155.825-69.902-155.825-155.826
                            c0-3.751,0.227-7.445,0.489-11.13h310.674c0.263,3.685,0.489,7.38,0.489,11.13C411.825,408.706,341.922,478.609,255.999,478.609z"
                            />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M283.826,345.043c-27.662,0-50.087,22.424-50.087,50.087s22.424,50.087,50.087,50.087
                            c27.662,0,50.087-22.424,50.087-50.087S311.488,345.043,283.826,345.043z M283.826,411.826c-9.207,0-16.696-7.49-16.696-16.696
                            s7.489-16.696,16.696-16.696c9.206,0,16.696,7.49,16.696,16.696S293.032,411.826,283.826,411.826z"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <circle cx="183.652" cy="361.739" r="16.696"/>
                        </g>
                      </g>
                      <g>
                        <g>
                          <circle cx="250.435" cy="228.174" r="16.696"/>
                        </g>
                      </g>
                      </svg>
              <span className="">Launch Potion</span>
            </div>
            <div className="absolute z-20 max-h-[600px] w-full">
            {/* <Spline
        scene="https://prod.spline.design/iGSE-sQLOVtjOoPN/scene.splinecode" 
       
      /> */}
            </div>
            <div className="relative z-20 mt-auto ">
              <blockquote className="space-y-2 p-3 rounded-lg bg-black/10">
                <p className="text-lg">
                  &ldquo;...build out and custom your automations with real-time dashboards.&rdquo;
                </p>
                
              </blockquote>
              <footer className="text-sm pt-3">Made with ♡</footer>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome back!
                </h1>
                <p className="text-sm text-muted-foreground">
                  Let&apos;s get you started.
                </p>
                <AuthForm />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
