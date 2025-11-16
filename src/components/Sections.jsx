import { motion, useScroll, useTransform } from 'framer-motion';
import { Gauge, Zap, Sparkles } from 'lucide-react';

export default function Sections() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section id="experience" className="relative z-10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <motion.div style={{ scale }} className="grid gap-10 md:grid-cols-3">
          <Card
            icon={<Gauge className="text-red-400" />}
            title="Precision Handling"
            description="Active aero, adaptive dampers, and torque vectoring keep you glued to any road."
          />
          <Card
            icon={<Zap className="text-yellow-400" />}
            title="Instant Power"
            description="Tri‑motor architecture delivers relentless acceleration on demand."
          />
          <Card
            icon={<Sparkles className="text-cyan-400" />}
            title="Immersive Cabin"
            description="Glowing red ambience, panoramic HUD, and spatial audio redefine the drive."
          />
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-4 text-white/70">{description}</p>
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}
