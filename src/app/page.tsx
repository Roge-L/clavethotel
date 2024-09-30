// app/page.tsx
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/temporary-cover-photo.jpg')" }}>
      {/* Overlay to soften the background image */}
      <div className="absolute inset-0 bg-yellow-950 opacity-20"></div>

      {/* Main Content Section */}
      <section className="relative z-10 flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto text-center px-4">
          <div>
            <h3 className="text-2xl mb-2 text-white font-serif">Welcome to</h3>
            <h1 className="text-7xl font-bold mb-4 text-white font-serif">Clavet Motor Inn</h1>
            <h2 className="text-3xl font-semibold mb-8 text-white">Your Cozy Prairie Retreat</h2>
          </div>
        </div>
      </section>

      <section>
      <h3 className="text-2xl font-semibold mb-6 text-amber-100">Clavet Motor Inn</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address and Contact Information */}
          <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-amber-900">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>2-10 Main St</p>
            <p>Clavet, SK S0K 0Y0</p>
            <p>Phone: (306) 242-2848</p>
            <p>Email: admin@clavethotel.com</p>
          </div>

          {/* Office Hours */}
          <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-amber-900">
            <h4 className="text-lg font-semibold mb-2">Office Hours</h4>
            <p>Monday - Friday: 8am - 10pm</p>
            <p>Saturday - Sunday: 9am - 9pm</p>
            <p>Holidays: 10am - 8pm</p>
          </div>

          {/* Social Media */}
          <div className="bg-black bg-opacity-50 p-4 rounded-lg border border-amber-900">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ClavetBar" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100">Facebook</a>
              <a href="https://www.instagram.com/clavetmotorinn/" target="_blank" rel="noopener noreferrer" className="text-amber-200 hover:text-amber-100">Instagram</a>
              <a href="#" className="text-amber-200 hover:text-amber-100">Twitter</a>
            </div>
          </div>
        </div>

      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
