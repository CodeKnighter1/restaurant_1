"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";

function Login() {
  const { setAuth } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl bg-gradient-to-b from-green-950 via-green-900 to-green-950 p-6 shadow-xl border border-green-800/40 sm:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-white tracking-wide">Welcome back</h1>
        <h4 className="mt-2 text-sm text-gray-400 sm:text-base">
          Don't have an account?
          <span
            className="ml-1 cursor-pointer text-green-400 hover:underline"
            onClick={() => setAuth("register")}
          >
            Sign up
          </span>
        </h4>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className="bg-green-900 text-gray-100 border border-green-700 focus:ring-green-500"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-green-900 text-gray-100 border border-green-700 focus:ring-green-500"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <span
              className="text-sm text-green-400 cursor-pointer hover:underline sm:text-base"
              onClick={() => setAuth("forgot-password")}
            >
              Forgot Password
            </span>
          </div>
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Login;
