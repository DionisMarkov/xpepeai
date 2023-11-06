import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { images } from "../constants/images";

const { audit, charts, coinKromatika } = images;

const CoreStrength = () => {
  return (
    <section
      id="section-core-strength"
      className="section-padding section-core-strength"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Core Strength</h2>
      </motion.div>

      <div className="hero__content">
        <p>Our innovative dApp brings you:</p>
        <ul>
          <li>
            <p>
              the <strong>best value for your swaps</strong> by comparing
              multiple Dexs, picking the best rates for you.
            </p>
          </li>
          <li>
            <p>
              <strong>reduced slippage</strong> using multiple pools in our
              MetaDEX Aggregator, to execute your trade.
            </p>
          </li>
          <li>
            <p>
              <strong>
                automatically processed, decentralized limit orders.
              </strong>
            </p>
          </li>
          <li>
            <p>
              <strong>additional LP fees</strong> on your filled limit orders
              (FELO). Up to 9% depending on volatility of trading pair.
            </p>
          </li>
          <li>
            <p>
              Combined, <strong>xPEPEAI dApp provides you more</strong>, if
              not the best value for every trade you make !
            </p>
          </li>
        </ul>
      </div>

      <h3 className="subtitle">These are our core building blocks</h3>
      <div className="cards-wrapper">
        <div className="card">
          <div className="card__header">
          </div>
          <div className="card__body">
            <span className="card__title">Secure audited smart contracts</span>
            <span className="card__content">
              The dapp was audited in multiple iterations in both internal and
              external testing environments. The external testing was performed
              by CertiK, Mythx, OpenZeppelin, UNCX Network
              <br />
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
          </div>
          <div className="card__body">
            <span className="card__title">High utility $XPEPE token</span>
            <span className="card__content">
              $XPEPE is a utility token which is used for paying limit order fees
              and end-to-end usage of gasless mode (optional feature, coming
              very soon).
              <br />
              <br />
              For every limit order, the xPEPEAI protocol user only pays a
              service fee in $XPEPE, of the amount traded.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrength;
