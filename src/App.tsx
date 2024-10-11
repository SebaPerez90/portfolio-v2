import Header from '@/components/header';
import Hero from '@/components/hero/Hero';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/core/Footer';
import FormContainer from '@/components/FormContainer';

function App() {
  return (
    <>
      <Header />
      <main className='col-center gap-24'>
        <Hero />
        <FormContainer />
        <Footer />
      </main>
      <Toaster />
    </>
  );
}

export default App;
