import type { FC } from "react";
import type { IconType } from "react-icons";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  desc: string;
  Icon?: IconType;
}

const Card: FC<CardProps> = ({ title, desc, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl shadow-xl border border-neutral-800"
  >
    <div className="flex items-center gap-4 mb-4">
      {Icon && <Icon className="text-white text-3xl shrink-0" />}
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

export default Card;
