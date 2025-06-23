import ForgotPassword from '@/components/auth/ForgotPassword';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/use-auth';

export default function Auth() {
  const { authStata } = useAuth();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-green-800 via-emerald-900 to-black">
      <Card className="w-full max-w-md p-5 shadow-2xl rounded-2xl border border-green-300/20 bg-gradient-to-tr from-green-950 via-green-900 to-emerald-800">
        <CardContent className="space-y-4">
          {authStata === 'login' && <Login />}
          {authStata === 'register' && <Register />}
          {authStata === 'forgot-password' && <ForgotPassword />}
        </CardContent>
      </Card>
    </div>
  );
}
