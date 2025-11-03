import Main from './components/Main';
import Contact from './components/Contact';
import Research from './components/Research';
import Footer from './components/Footer';
import About from './components/About';
import Solutions from './components/Solutions';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="w-full">
      <Header />  
      <Main />
      <About />
    </main>
  )
}
