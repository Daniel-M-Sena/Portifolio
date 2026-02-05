import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Layers, Smartphone, Globe, Pencil } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Identidade Visual",
    description: "Criação de identidades visuais que fortalecem marcas, geram reconhecimento e transmitem profissionalismo de forma clara e consistente.",
  },
  {
    icon: Globe,
    title: "Posts Social Midia",
    description: "Criação de posts para redes sociais com designs atrativos, focados em engajamento, comunicação clara e fortalecimento da marca.",
  },
  {
    icon: Smartphone,
    title: "Criação de Logomarca",
    description: "Desenvolvimento de logomarcas únicas e memoráveis, pensadas para representar a essência e os valores da sua marca.",
  },
  {
    icon: Pencil,
    title: "Mockups",
    description: "Criação de mockups realistas para visualizar projetos aplicados e apresentar ideias com mais impacto e profissionalismo.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-[#0a1a2f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4DA3FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#4DA3FF]">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aqui estão alguns dos serviços que mais atendo!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#4DA3FF]/20 hover:border-[#4DA3FF]/60 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/0 to-[#6EB6FF]/0 group-hover:from-[#4DA3FF]/20 group-hover:to-[#6EB6FF]/20 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#4DA3FF]/20 to-[#6EB6FF]/20 border-2 border-[#4DA3FF]/40 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#4DA3FF]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl mb-4 text-white group-hover:text-[#4DA3FF] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center gap-2 text-[#4DA3FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Learn more</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#4DA3FF] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
