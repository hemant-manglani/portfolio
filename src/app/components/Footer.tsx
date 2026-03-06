import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-gray-400">Hemant Manglani</span>
          </div>
          <p className="text-gray-400 text-center">
            Helping startups build intelligent and scalable software.
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
