// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Clavet Motor Inn</Link>
          </div>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/rooms" className="hover:underline">Rooms</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="flex-grow py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Clavet Motor Inn</h1>
          <p className="text-lg mb-8">
            Experience comfort and convenience at our cozy motel. Whether you&apos;re here for a relaxing stay or a quick stop, we offer a range of amenities to make your visit enjoyable.
          </p>
          <Image
            src="/temporary-cover-photo.jpg" // Replace with the path to your image
            alt="Motel Image"
            width={800}
            height={400}
            className="mx-auto mb-8"
            priority
          />
          <Link href="/rooms" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">View Our Rooms</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Clavet Motor Inn. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-white hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
