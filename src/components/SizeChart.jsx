import React from "react";

const sizeData = [
  {
    size: "XXS",
    bust: '30 - 31"',
    waist: '23 - 24"',
    hips: '31 - 34"',
  },
  {
    size: "XS",
    bust: '31.5 - 33.5"',
    waist: '24 - 26"',
    hips: '34 - 36.5"',
  },
  {
    size: "S",
    bust: '34 - 36"',
    waist: '26.5 - 28.5"',
    hips: '37 - 39"',
  },
  {
    size: "M",
    bust: '36.5 - 38.5"',
    waist: '29 - 31"',
    hips: '39.5 - 41.5"',
  },
];

const SizeChart = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-pink-100 p-6 mt-8">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
        Size Chart
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-pink-50">
              <th className="border p-3">Size</th>
              <th className="border p-3">Bust</th>
              <th className="border p-3">Waist</th>
              <th className="border p-3">Hips</th>
            </tr>
          </thead>

          <tbody>
            {sizeData.map((item) => (
              <tr key={item.size}>
                <td className="border p-3 font-semibold">
                  {item.size}
                </td>
                <td className="border p-3">{item.bust}</td>
                <td className="border p-3">{item.waist}</td>
                <td className="border p-3">{item.hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Size Note */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-semibold text-green-700 mb-2">
          Need a Custom Size?
        </h3>

        <p className="text-gray-700">
          If your measurements do not match the size chart,
          we can stitch the dress according to your custom
          measurements.
        </p>

        <a
          href="https://wa.me/919334277345"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          WhatsApp Us: +91 93342 77345
        </a>
      </div>
    </div>
  );
};

export default SizeChart;