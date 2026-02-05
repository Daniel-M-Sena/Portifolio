import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Palette, Figma, Layout, Code2, Smartphone, Zap } from "lucide-react";

const skills = [
  { name: "Photoshop", icon: Palette, color: "#4DA3FF" },
  { name: "Figma", icon: Figma, color: "#6EB6FF" },
  { name: "CorelDraw", icon: Layout, color: "#4DA3FF" },
  { name: "HTML/CSS", icon: Code2, color: "#6EB6FF" },
  { name: "Canva", icon: Smartphone, color: "#4DA3FF" },
  { name: "CapCut", icon: Zap, color: "#6EB6FF" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B132B] to-[#0a1a2f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6EB6FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span>Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-[#4DA3FF]/20 hover:border-[#4DA3FF]/60 transition-all duration-300 text-center relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/0 to-[#6EB6FF]/0 group-hover:from-[#4DA3FF]/10 group-hover:to-[#6EB6FF]/10 transition-all duration-300" />
                  
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}11)`,
                        border: `2px solid ${skill.color}44`,
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: skill.color }} />
                    </div>
                    <p className="text-white font-medium">{skill.name}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
