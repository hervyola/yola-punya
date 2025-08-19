import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Kontak() {
    const [showForm, setShowForm] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <section className="relative bg-gradient-to-br from-[#F5F8FB] to-[#E8F1F5] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
            
            {/* Background efek */}
            <div className="absolute inset-0">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#024D60]/10 via-transparent to-[#567C8D]/10"></div>

                {/* Lingkaran blur */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#024D60]/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#567C8D]/20 rounded-full filter blur-3xl animate-pulse"></div>
            </div>

            <motion.div
                className="relative max-w-3xl w-full text-center z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Header */}
                <motion.h2
                    className="text-4xl font-extrabold text-[#024D60] mb-4"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="text-[#024D60] text-lg mb-10 opacity-80"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Let's chat! Contact me via social media or send me a direct message here.
                </motion.p>

                {/* Kartu Kontak */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[
                        {
                            href: "https://wa.me/6281240633881",
                            icon: <FaWhatsapp size={26} />,
                            text: "081240633881",
                            hover: "hover:text-green-600",
                        },
                        {
                            href: "https://instagram.com/hervyolaverin",
                            icon: <FaInstagram size={26} />,
                            text: "@hervyolaverin",
                            hover: "hover:text-pink-500",
                        },
                        {
                            href: "https://linkedin.com/in/hervyola-verin-febriani",
                            icon: <FaLinkedin size={26} />,
                            text: "Hervyola Verin Febriani",
                            hover: "hover:text-blue-600",
                        },
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.08,
                                boxShadow: "0px 6px 20px rgba(0,0,0,0.15)",
                            }}
                            className={`flex flex-col items-center justify-center bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transition ${item.hover}`}
                        >
                            {item.icon}
                            <span className="mt-2 text-sm text-[#024D60]">{item.text}</span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Tombol Form */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(!showForm)}
                    className="px-8 py-3 bg-[#024D60] text-white rounded-full shadow-lg hover:shadow-xl transition"
                >
                    {showForm ? "Close form" : "Send a message"}
                </motion.button>

                {/* Form Animasi */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200"
                        >
                            <form className="space-y-4">
                                <motion.input
                                    type="text"
                                    placeholder="your name"
                                    whileFocus={{ scale: 1.02 }}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#024D60] shadow-sm"
                                />
                                <motion.input
                                    type="email"
                                    placeholder="your email"
                                    whileFocus={{ scale: 1.02 }}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#024D60] shadow-sm"
                                />
                                <motion.textarea
                                    placeholder="your message"
                                    rows="4"
                                    whileFocus={{ scale: 1.02 }}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#024D60] shadow-sm"
                                ></motion.textarea>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full bg-[#024D60] text-white px-4 py-2 rounded-lg hover:shadow-md transition"
                                >
                                    Send
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
