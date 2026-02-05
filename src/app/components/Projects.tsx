import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Identidade Visual Congresso",
    category: "Identidade Visual",
    description: "Identidade Visual para Congresso de Jovens - Marcados Para Anunciar",
    image: "/imagens/idcongresso.jpg",
    tags: ["Photoshop", "CorelDraw"],
    link: "https://www.behance.net/gallery/243497173/Camisa-para-Congresso-Marcados-para-Anunciar?tracking_source=search_projects|camisa+para+congresso&l=1",
  },
  {
    title: "Post Campeonato de Futebol",
    category: "Post Mídias Sociais",
    description: "Criação de Flyer para diivulgação de um Campeonato de Futebol.",
    image: "/imagens/postcampeonato.jpg",
    tags: ["Photoshop", "CorelDraw"],
    link: "https://www.behance.net/gallery/243546699/Post-Campeonato-de-Futebol-Beneficente?tracking_source=search_projects|post+campeonato+de+futebol&l=14",
  },
  {
    title: "B-tool Mobile",
    category: "E-commerce",
    description: "Experiência mobile fluida para lojas online.",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e",
    tags: ["E-commerce", "Mobile"],
    link: "https://meusite.com/projeto3",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#0a1a2f] to-[#0B132B] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6EB6FF] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4DA3FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Projetos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Alguns dos meus projetos entregues e aprovados!
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#4DA3FF]/20">
              {/* Image */}
              <div className="relative aspect-video group">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4DA3FF] flex items-center justify-center hover:bg-[#6EB6FF] transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </a>

                {/* Category */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-[#4DA3FF] rounded-full text-white text-sm">
                  {project.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-[#4DA3FF]/30 rounded-full text-[#4DA3FF] text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4DA3FF] hover:gap-3 transition-all"
                >
                  Ver Projeto
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white/5 border border-[#4DA3FF]/30 flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-[#4DA3FF]" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#4DA3FF] w-8"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white/5 border border-[#4DA3FF]/30 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-[#4DA3FF]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
