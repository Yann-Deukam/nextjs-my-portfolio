"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  navItems: { label: string; href: string }[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function MobileNav({ open, setOpen, navItems }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Glass Background */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(25px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative flex h-full flex-col items-center justify-center gap-10 text-white"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={itemVariants}
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.08 }}
                className="text-3xl font-semibold tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Button inside mobile menu */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="mt-6 bg-white hover:bg-gray-100 text-gray-100 text-3xl font-semibold tracking-wide px-16 py-8 cursor-pointer"
                onClick={() => setOpen(false)}
                variant="outline"
              >
                Contact
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
