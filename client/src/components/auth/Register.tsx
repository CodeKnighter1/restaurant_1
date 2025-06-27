"use client";

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
import { useNavigate } from 'react-router-dom';
import $api from '@/http';

function Register() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '', // Username qo'shildi
    },
  });

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    console.log('Yuborilayotgan URL:', $api.defaults.baseURL + '/auth/register');
    console.log('Yuborilayotgan ma\'lumotlar:', values);
    try {
      const response = await $api.post('/auth/register', values);
      const { email, isAdmin } = response.data.user || {};
      if (!email) throw new Error('User data not received');
      localStorage.setItem('user', JSON.stringify({ email, isAdmin }));
      navigate('/');
    } catch (error) {
      console.error('Register error:', {
        message: error.message,
        response: error.response?.data,
        request: error.request,
        config: error.config,
      });
      if (error.response) {
        form.setError('root', {
          type: 'manual',
          message: error.response.data?.message || 'Server error',
        });
      } else if (error.request) {
        form.setError('root', {
          type: 'manual',
          message: 'No response from server. Check connection or server port (expected 5000).',
        });
      } else {
        form.setError('root', {
          type: 'manual',
          message: 'Registration failed. Try again.',
        });
      }
    }
  };

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
        <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-5">
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-200">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter username"
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
          {form.formState.errors.root && (
            <p className="text-red-400 text-sm">{form.formState.errors.root.message}</p>
          )}
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