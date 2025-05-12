import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Testimonials() {
    const reviews = [
        {
            name: "Alice Johnson",
            role: "IT Manager",
            company: "TechNova",
            text: "SoftSell made it super easy to get value from unused licenses. The entire process was smooth and transparent.",
        },
        {
            name: "Mark Lee",
            role: "CEO",
            company: "SoftCorp",
            text: "Smooth, fast, and profitable. We recovered value from old software effortlessly. Highly recommended!",
        },
        {
            name: "Sara Patel",
            role: "Procurement Lead",
            company: "CloudBridge",
            text: "I appreciate the quick support and simple process. We were able to monetize software we no longer needed.",
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white py-16">
            <h2 className="text-3xl font-bold text-center mb-10  dark:text-gray-100">
                What Our Clients Say
            </h2>

            <div className="max-w-5xl mx-auto px-4">
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 7000, disableOnInteraction: false }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="pb-10"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative bg-gradient-to-br from-indigo-100/60 to-white/80 dark:from-gray-700 dark:to-gray-800 p-10 rounded-3xl shadow-2xl backdrop-blur-sm border border-indigo-200/30 dark:border-gray-700 text-center transition-all duration-500 hover:scale-[1.02]">
                                <div className="text-5xl text-indigo-500 dark:text-indigo-400 mb-6 animate-pulse">“</div>
                                <p className="italic text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6">
                                    {review.text}
                                </p>
                                <div className="font-semibold text-xl text-gray-900 dark:text-white">{review.name}</div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {review.role}, {review.company}
                                </p>

                                {/* Decorative triangle for quote bubble look */}
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-indigo-100 dark:border-t-gray-800"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
