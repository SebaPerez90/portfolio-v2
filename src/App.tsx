import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import Loading from './components/core/Loading';

const Header = lazy(() => import('@/components/header'));
const Hero = lazy(() => import('@/components/hero/Hero'));
const Footer = lazy(() => import('@/components/core/Footer'));
const FormContainer = lazy(() => import('@/components/FormContainer'));
const SkillsContainer = lazy(() => import('@/components/SkillsContainer'));
const Experience = lazy(() => import('@/components/Experience'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* <Header /> */}
      {/* <main className="col-center gap-0 bg-white dark:bg-dark-neutral">
        <Hero />
        <Experience />
        <SkillsContainer /> */}
      <FormContainer />
      {/* </main> */}
      <Footer />
      <Toaster />
    </Suspense>
  );
}

export default App;
