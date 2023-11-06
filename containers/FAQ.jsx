import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { Accordion } from "../components";

const faqs = [
  {
    label: "What is xPEPE, and what is its primary purpose?",
    content: (
      <>
   xPEPE is a blockchain utility token designed to streamline fee payments and enhance the user experience within the blockchain ecosystem. Its primary purpose is to provide a predictable and cost-effective means of transaction fee payment, reducing reliance on volatile cryptocurrencies like Ethereum (ETH).
      </>
    ),
  },
  {
    label: "How can I acquire xPEPE tokens?",
    content: [
      "You can acquire xPEPE tokens through various cryptocurrency exchanges and trading platforms. The initial liquidity pool provides a source for obtaining xPEPE tokens, and we also encourage engagement with the community for information on token acquisition.",
    ],
  },
  {
    label: " What sets xPEPE apart from other utility tokens?",
    content: [
      "xPEPE is distinct in its focus on fee payments within the blockchain ecosystem. It provides predictability and stability in transaction costs, making it an attractive choice for users seeking a seamless experience. Additionally, the project's commitment to transparency, community governance, and long-term sustainability sets it apart.",
    ],
  },
  {
    label: "How can I participate in the governance of the xPEPE project?",
    content: (
      <>
To participate in the governance of the xPEPE project, you can hold and stake xPEPE tokens. We are actively developing a decentralized autonomous organization (DAO) that allows token holders to propose and vote on changes, improvements, and initiatives for the project's development.
      </>
    ),
  },
  {
    label: "What is the vesting period for the locked tokens, and how will they be used?",
    content: [
      "The locked tokens are subject to a vesting period designed to ensure their responsible use for the long-term benefit of the project. The specifics of the vesting period and the usage of these tokens will be detailed in a dedicated governance proposal, open to community input and voting.",
    ],
  },
  {
    label: "How is the xPEPE team incentivized, and what is the commitment to project development?",
    content: [
      "A portion of the xPEPE token supply is allocated to the core team for incentivization, marketing, and ongoing development. This allocation is aimed at ensuring the dedication and growth of the project, and the team's commitment to xPEPE's success is unwavering.",
    ],
  },
  {
    label: "What's the long-term vision for xPEPE?",
    content: [
      "xPEPE's long-term vision is to become a foundational component of the blockchain ecosystem, offering a reliable and cost-effective means of transaction fee payment. We intend to expand use cases, build partnerships, and remain at the forefront of blockchain innovation and decentralization.",
    ],
  },
  {
    label: "How can I stay updated on xPEPE's progress and developments?",
    content: (
      <>
For regular updates on xPEPE's progress, developments, and community engagement, we encourage you to join our official social media channels, follow our blog, and participate in community discussions. Our team remains committed to keeping the community informed and engaged.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <section id="section-faq" className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">FAQ</h2>
      </motion.div>
      <div className="container faqs">
        {faqs.map(({ label, content }, i) => (
          <Accordion label={label} content={content} key={i} id={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
