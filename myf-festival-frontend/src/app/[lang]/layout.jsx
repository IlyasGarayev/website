import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LanguageLayout({ children, params }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}