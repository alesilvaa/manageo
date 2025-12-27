import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Users, Calendar, Sparkles } from 'lucide-react';
import { Terminal } from './terminal';

export default function HomePage() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply opacity-60 animate-blob" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-300/30 blur-[120px] rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 mb-8 border border-blue-200">
              <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
              La nueva forma de gestionar
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-blue-950 mb-8">
              Gestiona tu Negocio
              <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">De Forma Inteligente</span>
            </h1>
            <p className="mt-4 text-xl text-blue-900/80 max-w-2xl mx-auto leading-relaxed">
              Software especializado para Gimnasios, Peluquerías y Centros de Estética.
              Administra citas, pagos y clientes en un solo lugar con una experiencia inigualable.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/sign-up" target="_blank">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                >
                  Comienza Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-blue-900 px-4 py-2 hover:bg-blue-50 rounded-full transition-colors">
                Ver características <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-20 relative">
            {/* Removed the obscuring gradient overlay */}
            <div className="mx-auto max-w-5xl transform hover:scale-[1.01] transition-transform duration-500">
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-900/5 p-4 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-50">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Ingresos este mes</p>
                          <p className="text-xl font-bold text-gray-900">Gs. 15.450.000</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-50">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Nuevos Clientes</p>
                          <p className="text-xl font-bold text-gray-900">+24</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Terminal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Características</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Todo lo que necesitas para crecer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blue-900/70 mx-auto">
              Herramientas potentes diseñadas para simplificar tu día a día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-blue-50/50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-500 text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <Calendar className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Gestión de Citas</h3>
              <p className="text-blue-900/70 leading-relaxed">
                Agenda inteligente que evita conflictos. Recordatorios automáticos para reducir el ausentismo.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-blue-50/50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-500 text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">CRM de Clientes</h3>
              <p className="text-blue-900/70 leading-relaxed">
                Conoce a tus clientes. Historial de servicios, preferencias y notas personalizadas en un solo lugar.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-blue-50/50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-600 text-white mb-6 transform group-hover:-translate-y-1 transition-transform">
                <CreditCard className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">Pagos Integrados</h3>
              <p className="text-blue-900/70 leading-relaxed">
                Cobra tarjetas, suscripciones y genera facturas automáticamente. Olvídate de la contabilidad manual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Prueba Manageo hoy mismo y descubre por qué cientos de negocios confían en nosotros.
          </p>
          <a href="/sign-up" target="_blank">
            <Button
              size="lg"
              className="h-14 px-10 text-lg rounded-full bg-white text-blue-950 hover:bg-blue-50 shadow-xl transition-all hover:scale-105 font-bold"
            >
              Empezar Prueba Gratuita
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
