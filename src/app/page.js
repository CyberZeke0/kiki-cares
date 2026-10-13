import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyKiki from '@/components/WhyKiki';
import Founder from '@/components/Founder';
import Reviews from '@/components/Reviews';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <WhyKiki />
      <Founder />
      <Reviews />
      <Newsletter />
      <Footer />
    </main>
  );
}