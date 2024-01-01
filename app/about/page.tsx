export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to our Next.js app! We are dedicated to providing you with a
        unique and engaging experience. Our app utilizes the latest web
        technologies to ensure a seamless and efficient user journey.
      </p>
      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to innovate and lead in the web development sector. We
          strive to create impactful solutions that cater to the needs of our
          users.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
        <p className="text-lg text-gray-700">
          We offer a range of services and products designed to enhance your
          digital presence. From web design to development, we cover all aspects
          of creating a stunning online platform.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700">
          {`Have any questions or feedback? Feel free to reach out to us. We're
          always here to help!`}
        </p>
      </section>
    </article>
  );
}
