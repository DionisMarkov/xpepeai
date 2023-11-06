import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="section-hero" className="hero">
      <h1 className="hero__title">xPEPEAI DEX</h1>
      <p className="hero__subtitle">
      Born in the era of the AI. Next Gen Dex Tradeing APP on Arbitrum Network.
      </p>
      <div className="btn-group">
        <Link passHref={true} href="https://app.uniswap.org/tokens/arbitrum/0x7525a9568bc964b0de5b33c6920fad673876b473?chain=arbitrum">
          <motion.a
            className="btn btn-solid"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            BUY NOW
          </motion.a>
        </Link>
        <Link passHref={true} href="#section-token">
          <motion.a
            className="btn btn-outline"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.9 }}
          >
            Discover $XPEPE
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
