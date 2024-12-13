import React from "react";
import Navbar from "@/customcomponents/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-950 ">
        <Navbar />
        <div className="h-[85%] w-[100%] flex">
          <div className="h-[100%] w-[60%]  flex flex-col items-center text-white ">
            <h1 className="text-[60px] font-bold mt-[15%]">
              Welcome To ElevateU
            </h1>
            <p className="text-[17px] w-[80%] text-center mt-[2%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              nulla impedit voluptatem quaerat quasi, quo accusantium vero rerum
              eveniet ullam aperiam ipsum odio consequuntur mollitia similique
              saepe accusamus. Rem, veritatis.
            </p>
          </div>
          <div className="h-[100%] w-[40%]  flex items-center justify-center">
            <Card className="w-[60%]">
              <CardHeader>
                <CardTitle className="text-[25px]">Register Form</CardTitle>
                <CardDescription>
                  Create Your Account in one-click
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Username</Label>
                      <Input
                        required
                        id="name"
                        placeholder="Set Your Username"
                      />

                      <Label htmlFor="name">Email</Label>
                      <Input
                        required
                        type="email"
                        placeholder="Enter Your Valid Email"
                      />

                      <Label htmlFor="name">Passoword</Label>
                      <Input required placeholder="Set Your Password" />

                      <Label htmlFor="name">Confirm Password</Label>
                      <Input required placeholder="Confirm Your Password" />
                    </div>
                    <Button type="submit">Submit</Button>

                    <h3
                      onClick={() => navigate("/login")}
                      className="m-auto cursor-pointer"
                    >
                      Already have an Account ??
                    </h3>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
