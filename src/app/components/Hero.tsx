import { motion } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-0 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B132B] via-[#1a2847] to-[#0B132B]">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #4DA3FF 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #4DA3FF 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, #4DA3FF 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, #4DA3FF 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #4DA3FF 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#4DA3FF] opacity-20 blur-xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#6EB6FF] opacity-20 blur-xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto text-center md:text-left">
          {/* Left */}
          <motion.div
            className="flex flex-col justify-center items-center md:items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="mx-auto md:mx-0 px-4 py-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] rounded-full text-black font-medium mb-4 tracking-wide w-fit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Olá, Seja Bem Vindo!
            </motion.p>

            <motion.h1
              className="mb-6 flex flex-col md:flex-row flex-wrap items-center md:items-baseline gap-2 md:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-2xl md:text-3xl font-medium text-white">
                Daniel Martins
              </span>

              <span className="text-4xl md:text-6xl font-extrabold text-[#4DA3FF] leading-tight">
                Designer Gráfico
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-100 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Crio experiências digitais intuitivas e bonitas que encantam os usuários
              e impulsionam o crescimento dos negócios. Gosto de um design limpo e
              soluções inovadoras, dou vida às ideias.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] text-white rounded-full hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#4DA3FF]/30"
              >
                Meus Projetos
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="/imagens/cv/CURRICULUM_VITAE_DANIEL_MARTINS.pdf"
                download="CURRICULUM_VITAE_DANIEL_MARTINS.pdf"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#4DA3FF] text-white rounded-full hover:bg-[#4DA3FF]/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-[260px] md:w-[300px] rounded-4xl overflow-hidden">
                <ImageWithFallback
                  src="/imagens/daniel.png"
                  alt="Foto de Daniel Martins"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-tr from-[#4DA3FF]/20 to-[#6EB6FF]/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
