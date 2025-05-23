import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="text-center mb-10">
        <Image
          src="/logo.png"
          alt="Summit Home Services Logo"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Summit Home Services LLC</h1>
        <p className="text-lg text-gray-600">Professional Air Duct, Dryer Vent, and Chimney Cleaning Services</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <Image
            src="/mock-duct.jpg"
            alt="Air Duct Cleaning"
            width={300}
            height={200}
            className="rounded-xl mb-2"
          />
          <h2 className="text-xl font-semibold mb-2">Air Duct Cleaning</h2>
          <p>Improve indoor air quality and HVAC efficiency with expert duct cleaning.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <Image
            src="/mock-dryer.jpg"
            alt="Dryer Vent Cleaning"
            width={300}
            height={200}
            className="rounded-xl mb-2"
          />
          <h2 className="text-xl font-semibold mb-2">Dryer Vent Cleaning</h2>
          <p>Reduce fire risk and boost dryer performance with regular vent maintenance.</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4">
          <Image
            src="/mock-chimney.jpg"
            alt="Chimney Services"
            width={300}
            height={200}
            className="rounded-xl mb-2"
          />
          <h2 className="text-xl font-semibold mb-2">Chimney Services</h2>
          <p>Certified chimney sweeping to keep your home safe and your chimney clear.</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Licensed & EPA Lead-Safe Certified</li>
          <li>Fast, Reliable, and Affordable Service</li>
          <li>100% Satisfaction Guarantee</li>
        </ul>
      </section>

      <section className="p-6 border rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Get a Free Estimate</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Full Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="p-2 border rounded" />
          <input type="tel" placeholder="Phone Number" className="p-2 border rounded" />
          <textarea placeholder="Service Needed" className="p-2 border rounded" rows="3" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
