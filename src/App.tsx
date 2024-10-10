import Header from '@/components/header';
import Hero from '@/components/hero/Hero';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Header />
      <Hero />
	  <Toaster />
    </>
  );
}

export default App;
