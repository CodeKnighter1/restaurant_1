'use client';

import { registerSchema } from '@/lib/validation';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/hooks/use-auth';

function Register() {
  const { setAuth } = useAuth();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl bg-gradient-to-b from-green-950 via-green-900 to-green-950 p-6 shadow-xl border border-green-800/40 sm:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-semibold text-white tracking-wide">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Already have an account?
          <span
            className="ml-1 text-green-400 cursor-pointer hover:underline"
            onClick={() => setAuth('login')}
          >
            Sign In
          </span>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className="bg-green-900 text-white border border-green-700 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
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
                    className="bg-green-900 text-white border border-green-700 placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <span
              className="text-sm text-green-400 cursor-pointer hover:underline"
              onClick={() => setAuth('forgot-password')}
            >
              Forgot Password?
            </span>
          </div>
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-all duration-200"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Register;
