"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TextAlignEnd, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { navItems } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mt-4 flex items-center justify-between rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-xl px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 text-white font-semibold text-xl">
              Yann Deukam
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-10 text-white text-3xl font-semibold tracking-wide">
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="text-lg opacity-80 hover:opacity-100 transition"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button className="bg-white hover:bg-gray-100 text-gray-800 text-lg font-semibold tracking-wide">
                Contact
              </Button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white"
            >
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {open ? <X size={28} /> : <TextAlignEnd size={28} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileNav open={open} setOpen={setOpen} navItems={navItems} />
    </>
  );
}
