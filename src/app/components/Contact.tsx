import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#0B132B] to-[#0a1a2f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DA3FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#4DA3FF]">Fale Comigo</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl mb-6">Vamos Conversar Sobre Tudo!</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Não Gosta de Formulários? Me envie um email ou chama no zap!. Será um prazer falar com você! 👋
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "danielmartinsdesena@gmail.com" },
                { icon: Phone, label: "Whatsapp", value: "+55 (63) 98460-9842" },
                { icon: MapPin, label: "Localização", value: "Palmas - TO, Brasil" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4DA3FF]/20 to-[#6EB6FF]/20 border border-[#4DA3FF]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-[#4DA3FF]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              {["Dribbble", "Behance", "LinkedIn", "GitHub"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/5 border border-[#4DA3FF]/30 flex items-center justify-center hover:bg-[#4DA3FF] hover:border-[#4DA3FF] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="text-white capitalize text-xs">{social[0]}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Seu Nome</label>
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full px-6 py-4 bg-white/5 border border-[#4DA3FF]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Seu Email</label>
                <input
                  type="email"
                  placeholder="nome@example.com"
                  className="w-full px-6 py-4 bg-white/5 border border-[#4DA3FF]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Assunto</label>
                <input
                  type="text"
                  placeholder="Seu Projeto"
                  className="w-full px-6 py-4 bg-white/5 border border-[#4DA3FF]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Descrição</label>
                <textarea
                  rows={6}
                  placeholder="Descreva aqui seu projeto..."
                  className="w-full px-6 py-4 bg-white/5 border border-[#4DA3FF]/30 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4DA3FF] transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] text-white rounded-full hover:shadow-lg hover:shadow-[#4DA3FF]/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
