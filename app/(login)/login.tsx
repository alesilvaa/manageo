'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <div className="min-h-[100dvh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      <div className="w-full max-w-md space-y-8 bg-white/70 dark:bg-black/50 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 dark:border-white/10 ring-1 ring-blue-900/5">
        <div className="flex flex-col items-center">
          <div className="flex justify-center bg-transparent mb-4">
            <Image
              src="/logo.png"
              alt="Manageo Logo"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              priority
            />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-blue-950 dark:text-white">
            {mode === 'signin' ? 'Bienvenido de nuevo' : 'Crea tu cuenta'}
          </h2>
          <p className="mt-2 text-center text-sm text-blue-900/60 dark:text-gray-400">
            {mode === 'signin'
              ? 'Ingresa tus credenciales para acceder'
              : 'Empieza a gestionar tu negocio hoy mismo'}
          </p>
        </div>

        <form className="mt-8 space-y-6" action={formAction}>
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />

          <div className="space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-blue-900 dark:text-gray-300 ml-1 mb-1"
              >
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue={state.email}
                required
                maxLength={50}
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-blue-100 dark:border-gray-800 placeholder-blue-900/30 text-blue-900 dark:text-white bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                placeholder="nombre@empresa.com"
              />
            </div>

            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-blue-900 dark:text-gray-300 ml-1 mb-1"
              >
                Contraseña
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === 'signin' ? 'current-password' : 'new-password'
                }
                defaultValue={state.password}
                required
                minLength={8}
                maxLength={100}
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-blue-100 dark:border-gray-800 placeholder-blue-900/30 text-blue-900 dark:text-white bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:z-10 sm:text-sm transition-all duration-200"
                placeholder="••••••••"
              />
            </div>
          </div>

          {state?.error && (
            <div className="text-red-500 text-sm bg-red-50 dark:bg-red-900/10 p-3 rounded-lg flex items-center gap-2">
              <span className="block w-1.5 h-1.5 rounded-full bg-red-500"></span>
              {state.error}
            </div>
          )}

          <div>
            <Button
              type="submit"
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-blue-500/20 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              disabled={pending}
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Procesando...
                </>
              ) : mode === 'signin' ? (
                'Iniciar Sesión'
              ) : (
                'Crear Cuenta'
              )}
            </Button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-blue-50 dark:border-gray-800">
          <div className="flex justify-center text-sm">
            <span className="px-2 text-blue-900/60">
              {mode === 'signin'
                ? '¿No tienes cuenta?'
                : '¿Ya tienes una cuenta?'}
            </span>
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${redirect ? `?redirect=${redirect}` : ''
                }${priceId ? `&priceId=${priceId}` : ''}`}
              className="font-medium text-blue-600 hover:text-blue-500 hover:underline transition-colors"
            >
              {mode === 'signin'
                ? 'Regístrate gratis'
                : 'Inicia sesión'}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-blue-900/40">
        &copy; {new Date().getFullYear()} Manageo. Todos los derechos reservados.
      </div>
    </div>
  );
}
