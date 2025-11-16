import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative h-[120vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,0,0.18),transparent_60%)]" />

      <motion.div style={{ y: y2 }} className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_6px_30px_rgba(255,0,0,0.35)]"
        >
          The Future Of Motion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
        >
          A sleek, dark gray sports car with glowing red interiors. Engineered to exhilarate. Designed to inspire. Built FOR A CAR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-black font-semibold shadow-2xl shadow-red-500/20 hover:scale-[1.02] transition"
          >
            Reserve Yours
          </a>
          <a
            href="#explore"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            Explore Specs
          </a>
        </motion.div>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute bottom-10 left-0 right-0 z-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{label:'0-60 mph', value:'2.7s'},{label:'Top Speed', value:'212 mph'},{label:'Range', value:'380 mi'},{label:'Power', value:'1020 hp'}].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur">
                <div className="text-xs uppercase tracking-widest text-white/60">{stat.label}</div>
                <div className="mt-1 text-2xl font-bold text-white">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black" />
    </section>
  );
}
