"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";

const offices = [
  { city: "Dubai (HQ)", detail: "DIFC, Dubai, United Arab Emirates" },
  { city: "Colombo", detail: "Colombo Port City, Sri Lanka" },
  { city: "Maldives", detail: "North Malé Atoll, Maldives" },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="space-y-10"
    >
      <div>
        <h3 className="mb-5 text-xs uppercase tracking-widest text-accent">Our Locations</h3>
        <div className="space-y-4">
          {offices.map((office) => (
            <div key={office.city}>
              <span className="block text-sm text-foreground">{office.city}</span>
              <span className="block text-sm text-foreground-muted">{office.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs uppercase tracking-widest text-accent">Direct Contact</h3>
        <a
          href="mailto:info@giara.com"
          className="block text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          info@giara.com
        </a>
        <a
          href="tel:+97140000000"
          className="mt-1 block text-sm text-foreground-muted transition-colors hover:text-accent"
        >
          +971 4 000 0000
        </a>
      </div>
    </motion.div>
  );
}