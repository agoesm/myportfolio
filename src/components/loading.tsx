import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Router from "next/router";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      {loading && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-primary text-lg"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              loading ...
            </motion.span>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Loading;
