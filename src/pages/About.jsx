function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800">About Us</h1>
       
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Story</h2>
          <p className="leading-relaxed text-gray-700 text-lg">
          Assorted Mini Shop was born from a passion for offering a diverse range of quality items that blend style and practicality. 
          Our collection is carefully curated to meet your everyday needs, whether you’re at home or on the go. With every product, we focus on variety, affordability, and modern design.

          </p>
        </div>

        <img
          src="/mission.png"
          alt="Tumbler Collection"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-12 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/vision.png"
          alt="Eco-friendly Production"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission & Vision</h2>
          <p className="leading-relaxed text-gray-700 text-lg mb-4">
          Our mission is to enhance daily living by offering high-quality, versatile products for all occasions. 
          We envision a shop where convenience meets style, practicality, and affordability for everyone.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Quality</h3>
            <p className="text-gray-700">
              We never compromise on quality, ensuring every products meets the highest standards.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Sustainability</h3>
            <p className="text-gray-700">
              Eco-conscious design is at the heart of everything we create.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We continuously explore new ways to enhance our products and customer experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
