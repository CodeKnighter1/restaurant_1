'use client';

import { forgotPasswordSchema } from '@/lib/validation';
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

function ForgotPassword() {
  const { setAuth } = useAuth();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    console.log(values);
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl bg-gradient-to-b from-green-950 via-green-900 to-green-950 p-6 shadow-xl border border-green-800/40 sm:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-semibold text-white tracking-wide">
          Reset Password
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Don't have an account?
          <span
            className="ml-1 text-green-400 cursor-pointer hover:underline"
            onClick={() => setAuth('register')}
          >
            Sign up
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
          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-all duration-200"
          >
            Send Reset Link
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ForgotPassword;
