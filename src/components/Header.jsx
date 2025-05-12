import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show sticky only when user scrolls up past a certain point
            if (currentScrollY > 80 && currentScrollY < lastScrollY) {
                setIsSticky(true);
            } else if (currentScrollY < 80 || currentScrollY > lastScrollY) {
                setIsSticky(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`top-0 w-full z-50 transition-all duration-300 py-1 sm:py-2 ${isSticky
                    ? "fixed bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md"
                    : "relative bg-white dark:bg-gray-900"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="size-36">
                    <img src="/images/logo.png" className="" />
                </div>

                {/* Navigation */}
                {/* <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 dark:text-white">
                    <a href="#how" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">How it Works</a>
                    <a href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">FAQ</a>
                    <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Contact</a>
                </nav> */}

                {/* CTA */}
                <div className="">
                    <div className="absolute top-6 right-6 z-10 ">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
