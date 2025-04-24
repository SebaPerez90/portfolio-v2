import Experience from '@/components/Experience';
import FormContainer from '@/components/FormContainer';
import SkillsContainer from '@/components/SkillsContainer';
import Footer from '@/components/core/Footer';
import Header from '@/components/header';
import Hero from '@/components/hero/Hero';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />
      <main className="col-center bg-white dark:bg-dark-neutral">
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
