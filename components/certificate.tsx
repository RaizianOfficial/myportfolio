import React from "react";

const certificates = [
  "https://www.hackerrank.com/certificates/iframe/0b1d4c4ad702",
  "https://www.hackerrank.com/certificates/iframe/cb96634c4f5e",
];

const Certificate: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((link, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition"
          >
            <iframe
              src={link}
              className="w-full h-[420px]"
              loading="lazy"
              title={`certificate-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
