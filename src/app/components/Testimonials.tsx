import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MDE3ODM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Working with Sara was an absolute pleasure. Her attention to detail and creative vision transformed our product completely. The user engagement increased by 150% after the redesign!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DesignFlow",
    image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NzAxNzgzNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "Sara's ability to understand our users and translate their needs into beautiful, functional designs is remarkable. She's not just a designer, she's a problem solver.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder, Creative Studio",
    image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MDE3ODM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    text: "The level of professionalism and creativity Sara brings to every project is outstanding. Our clients were blown away by the final designs. Highly recommended!",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#0B132B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4DA3FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#4DA3FF]">Feedbacks </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            O que meus cliente falam do meu trabalho?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#4DA3FF]/20 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-[#4DA3FF]" />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DA3FF]/5 to-[#6EB6FF]/5" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center md:justify-start">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4DA3FF] text-[#4DA3FF]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#4DA3FF]/50">
                    <ImageWithFallback
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-[#4DA3FF]">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 border border-[#4DA3FF]/30 flex items-center justify-center hover:bg-[#4DA3FF]/20 hover:border-[#4DA3FF] transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-[#4DA3FF]" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#4DA3FF] w-8"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/5 border border-[#4DA3FF]/30 flex items-center justify-center hover:bg-[#4DA3FF]/20 hover:border-[#4DA3FF] transition-all"
            >
              <ChevronRight className="w-6 h-6 text-[#4DA3FF]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
