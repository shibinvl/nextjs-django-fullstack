"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Checkbox,
  Link,
  Form,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(""); // clear previous error

    const formData = new FormData(event.currentTarget);
    const username = (formData.get("username") as string) || "";
    const password = (formData.get("password") as string) || "";

    try {
      await login(username, password);
      router.push("/dashboard"); // 🔁 redirect on success
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="flex flex-col gap-1 items-center">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-primary-500 rounded-full p-3">
              <Icon icon="lucide:boxes" className="text-3xl text-white" />
            </div>
            <span className="font-bold text-2xl text-primary-500">
              Dashboard
            </span>
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-default-500">
            Sign in to continue to your dashboard
          </p>
        </CardHeader>

        <CardBody className="gap-4">
          

          <Form
            className="flex flex-col gap-3"
            validationBehavior="native"
            onSubmit={handleSubmit}
          >
            <Input
              isRequired
              label="Username"
              name="username"
              placeholder="Enter your username"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
            />
            {error && (
            <div className="text-red-500 text-sm px-1 -mt-2">{error}</div>
          )}
            <div className="flex w-full items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm">
                Remember me
              </Checkbox>
              <Link className="text-default-500" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full" color="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </CardBody>

        <CardFooter className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center w-full">
            <Button variant="flat" isIconOnly className="bg-default-100">
              <Icon icon="logos:google-icon" className="text-xl" />
            </Button>
            <Button variant="flat" isIconOnly className="bg-default-100">
              <Icon icon="logos:microsoft-icon" className="text-xl" />
            </Button>
            <Button variant="flat" isIconOnly className="bg-default-100">
              <Icon icon="logos:apple" className="text-xl" />
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            <span className="text-default-500 text-sm">
              Don&apos;t have an account?
            </span>
            <Link href="#" size="sm" className="ml-1">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
