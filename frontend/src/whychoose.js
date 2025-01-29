import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white p-8">
      <h2 className="text-center text-4xl font-bold mb-4">
        <span className="text-red-500">Why</span> Choose Us
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Celebrate Quality, Trust, and Craftsmanship with Us
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            Commitment To Customer Satisfaction
          </h3>
          <p className="text-gray-600">
            The team at AapkaPainter <span className="font-bold">ensured</span>{" "}
            that all my requirements were acknowledged and that I was{" "}
            <span className="font-bold">satisfied</span> after each phase of the
            paint job. Whenever I come home after a tiring day, the walls
            breathe <span className="font-bold">life into the space</span>, and
            I can’t help but keep staring at them.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            Affordability And Hassle-Free
          </h3>
          <p className="text-gray-600">
            AapkaPainter’s reliability was{" "}
            <span className="font-bold">second to none</span>! They adhered to
            the agreed-upon <span className="font-bold">timeline</span> and{" "}
            <span className="font-bold">budget</span>, and their communication
            throughout the process was <span className="font-bold">prompt</span>{" "}
            and <span className="font-bold">transparent</span>.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            Expertise And Dedication
          </h3>
          <p className="text-gray-600">
            The pricing was <span className="font-bold">fair</span> and{" "}
            <span className="font-bold">transparent</span>, with{" "}
            <span className="font-bold">no hidden costs</span> or surprises.
            Their team demonstrated a genuine passion for their craft, which
            truly showed in the final result.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2">Attention To Detail</h3>
          <p className="text-gray-600">
            We found the team to be{" "}
            <span className="font-bold">very professional</span>. The attention
            to <span className="font-bold">detail</span>,{" "}
            <span className="font-bold">planning</span>, and{" "}
            <span className="font-bold">execution</span> were top-notch. The{" "}
            <span className="font-bold">quality</span> of the job was also very
            good.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold">You’ll Be Satisfied With Your Decision.</h3>
        <p className="text-gray-500 mt-2">
          By choosing us, you’re not merely selecting a painting service; you’re
          investing in a transformative experience that breathes life into your
          vision.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">39683+</h4>
            <p className="text-gray-500">Happy homes</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">4.6 ⭐</h4>
            <p className="text-gray-500">8K+ Google Reviews</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">1 Year</h4>
            <p className="text-gray-500">Warranty</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">2M+</h4>
            <p className="text-gray-500">Crafted Designs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
