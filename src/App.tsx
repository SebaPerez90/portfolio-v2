import Header from '@/components/header';
import Hero from '@/components/hero/Hero';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/core/Footer';
import FormContainer from '@/components/FormContainer';
import SkillsContainer from './components/SkillsContainer';
import { Experience } from './components/Experience';

function App() {
  return (
    <>
      <Header />
      <main className="col-center gap-0 bg-white dark:bg-dark-neutral">
        <Hero />
        <Experience />
        <SkillsContainer />
        <FormContainer />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
