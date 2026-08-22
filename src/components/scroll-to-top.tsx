"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-[calc((100vw-min(100vw,1280px))/2+1.5rem)] z-50 inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-background/90 hover:text-primary"
        >
          <ArrowUp className="h-4 w-4" />
          Наверх
        </motion.a>
      )}
    </AnimatePresence>
  );
}
