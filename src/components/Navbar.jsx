import { Menu, Car, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-lg">
              <Car className="text-white" size={20} />
              <motion.span
                className="absolute -right-1 -top-1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles size={18} className="text-yellow-300" />
              </motion.span>
            </div>
            <span className="text-white text-lg font-semibold tracking-wide">
              FOR A CAR
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#design" className="hover:text-white transition">Design</a>
            <a href="#performance" className="hover:text-white transition">Performance</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium shadow-lg shadow-red-500/10"
            >
              Reserve Now
            </motion.a>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80 md:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
