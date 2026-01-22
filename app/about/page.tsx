"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className=" min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About MM Holidays
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your trusted travel partner for unforgettable journeys, comfort,
            and complete peace of mind.
          </p>
        </div>
      </section>

      {/* WHO WE ARE – ANIMATED */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Who We Are
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>MM Holidays</strong> is a customer-focused travel company
            specializing in customized holiday packages, honeymoon trips,
            group tours, and corporate travel solutions.
          </p>

          <p className="text-gray-700">
            We believe travel should be stress-free, affordable, and memorable.
            Our experienced team ensures smooth planning and exceptional service
            from start to finish.
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-10 text-gray-900">
            Why Choose MM Holidays?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Customized Travel Packages",
              "Affordable & Transparent Pricing",
              "Trusted Hotel & Transport Partners",
              "24/7 Customer Support",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mehul ",
                role: "Founder & Travel Expert",
                initial: "M",
              },
              {
                name: "Afraz",
                role: "Holiday Package Specialist",
                initial: "A",
              },
              {
                name: "Vishakha",
                role: "Customer Support Manager",
                initial: "V",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
                  {member.initial}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Connect With Us
          </h2>

          <div className="flex justify-center gap-6 text-gray-600 font-medium">
            <Link
              href="https://www.instagram.com/mmholidays"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              Instagram
            </Link>
            <Link
              href="https://www.facebook.com/mmholidays"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              Facebook
            </Link>
            <Link
              href="https://www.linkedin.com/company/mmholidays"
              target="_blank"
              className="hover:text-blue-800 transition"
            >
              LinkedIn
            </Link>
          </div>

          <p className="mt-6 text-gray-500">
            📧 info@mmholidays.com
          </p>
        </div>
      </section>

    </div>
  );
}
