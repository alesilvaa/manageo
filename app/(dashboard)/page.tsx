import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Users, Calendar } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Gestiona tu Negocio
                <span className="block text-primary">De Forma Inteligente</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Software especializado para Gimnasios, Peluquerías y Centros de Estética.
                Administra citas, pagos y clientes en un solo lugar de manera profesional.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="/sign-up"
                  target="_blank"
                >
                  <Button
                    size="lg"
                    className="text-lg rounded-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Comienza Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Gestión de Citas
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Calendario intuitivo para agendar y gestionar reservas de forma eficiente,
                  evitando conflictos y mejorando la atención.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <Users className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Base de Datos de Clientes
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Mantén un registro detallado de tus clientes, su historial de visitas,
                  preferencias y datos de contacto.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Pagos y Facturación
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Procesa pagos, abonos y suscripciones de manera sencilla
                  integrado con Stripe para mayor seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ¿Listo para optimizar tu negocio?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Únete a cientos de comercios que ya usan Manageo para escalar sus operaciones
                y brindar una mejor experiencia a sus clientes.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="/sign-up" target="_blank">
                <Button
                  size="lg"
                  className="text-lg rounded-full bg-primary hover:bg-primary/90 text-white"
                >
                  Empezar Ahora
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
