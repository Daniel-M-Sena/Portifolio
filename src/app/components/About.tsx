import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4DA3FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Sobre <span className="text-[#4DA3FF]">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DA3FF] to-[#6EB6FF] rounded-full blur-xl opacity-30" />
              <div className="relative rounded-full overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4DA3FF]/10 to-[#6EB6FF]/10">
                <ImageWithFallback
                  src="/imagens/daniel.png"
                  alt="Foto de Daniel Martins"
                  className="w-15/16 h-15/16 object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl mb-6">
              Sou <span className="text-[#4DA3FF]">Designer Gráfico</span>
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Sou designer gráfico com 5 anos de experiência e uma paixão genuína por contar histórias através do visual.
              Acredito que bom design vai além da estética: ele comunica, conecta e resolve problemas.
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Ao longo da minha trajetória, desenvolvi projetos que equilibram criatividade, estratégia e propósito,
              sempre buscando evoluir e aprender algo novo.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#4DA3FF]/20 hover:border-[#4DA3FF]/50 transition-colors">
                <h4 className="text-4xl text-[#4DA3FF] mb-2">1000+</h4>
                <p className="text-gray-400">Projetos Completos</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#4DA3FF]/20 hover:border-[#4DA3FF]/50 transition-colors">
                <h4 className="text-4xl text-[#4DA3FF] mb-2">700+</h4>
                <p className="text-gray-400">Clientes Satisfeitos</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#4DA3FF]/30">
              Vamos Conversar
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
