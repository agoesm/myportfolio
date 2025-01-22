import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { glitchVariants } from "@/utils/glitch";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";
import Portfolio from "@/components/sections/portfolio";

const Home = () => {
  return (
    <>
      <div className="h-full">
        {/* content */}
        <div className="bg-white h-full overflow-auto scrollbar-hide">
          <section
            id="home"
            className="h-screen flex flex-col items-center justify-center"
          >
            <motion.h1
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-5 -mt-[100px]"
              variants={glitchVariants}
              initial="initial"
              animate="glitch"
            >
              I&apos;M MUHAMMAD AGUS MIFTAH
            </motion.h1>

            <ReactTyped
              className="text-center text-sm md:text-base"
              strings={[
                "Mobile and Frontend Developer.",
                "I build amazing Web and Mobile Apps!",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </section>

          <section id="resume" className="h-fit flex flex-col pt-16">
            <Resume />
          </section>

          <section id="portfolio" className="h-fit flex flex-col pt-16">
            <Portfolio />
          </section>
          {/* 
          <section id="blog" className="h-screen flex flex-col pt-16">
            <div className="h-screen flex flex-col items-center justify-center">
              <motion.h1
                className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-5 -mt-[100px]"
                variants={glitchVariants}
                initial="initial"
                animate="glitch"
              >
                Blog Cooming Soon
              </motion.h1>
            </div>
          </section> */}

          <section id="contact" className="h-screen pt-16">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
