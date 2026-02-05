import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a1a2f] border-t border-[#4DA3FF]/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2026 Site Portifólio.</span>
            <Heart className="w-4 h-4 fill-[#4DA3FF] text-[#4DA3FF]" />
            <span>Criado por Daniel Martins</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
