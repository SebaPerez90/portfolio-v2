import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';

const Header = lazy(() => import('@/components/header'));
const Hero = lazy(() => import('@/components/hero/Hero'));
const Footer = lazy(() => import('@/components/core/Footer'));
const FormContainer = lazy(() => import('@/components/FormContainer'));
const SkillsContainer = lazy(() => import('@/components/SkillsContainer'));
const Experience = lazy(() => import('@/components/Experience'));

function App() {
  return (
    <Suspense fallback={<div className="h-screen col-center bg-red-500">cargando</div>}>
      <Header />
      <main className="col-center gap-0 bg-white dark:bg-dark-neutral">
        <Hero />
        <Experience />
        <SkillsContainer />
        <FormContainer />
      </main>
      <Footer />
      <Toaster />
    </Suspense>
  );
}

export default App;
