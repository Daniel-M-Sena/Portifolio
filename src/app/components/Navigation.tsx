import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre Mim", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B132B]/80 backdrop-blur-lg border-b border-[#4DA3FF]/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl z-50"
            whileHover={{ scale: 1.05 }}
          >
            Meu <span className="text-[#4DA3FF]">Portifólio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#4DA3FF] transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4DA3FF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] text-white rounded-full hover:shadow-lg hover:shadow-[#4DA3FF]/30 transition-all duration-300"
          >
            Fale Comigo
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-20 left-0 right-0 bottom-0 bg-[#0B132B]/95 backdrop-blur-lg"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-2xl text-gray-300 hover:text-[#4DA3FF] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#4DA3FF] to-[#6EB6FF] text-white rounded-full hover:shadow-lg hover:shadow-[#4DA3FF]/30 transition-all duration-300 mt-4"
          >
            Fale Comigo
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
