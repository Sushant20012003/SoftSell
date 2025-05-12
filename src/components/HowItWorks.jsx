import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpg";

export default function HowItWorks() {
    const steps = [
        {
            img: image1,
            title: "Upload License",
            desc: "Easily upload the details of your unused or surplus software licenses through our secure submission form. We accept a wide range of software types and ensure your data is handled with complete confidentiality.",
        },
        {
            img: image2,
            title: "Get Valuation",
            desc: "Our expert system evaluates your license based on current market demand, license condition, and software type. You’ll receive a fair, transparent valuation report within a short period, with no obligations attached.",
        },
        {
            img: image3,
            title: "Get Paid ",
            desc: "Once you accept the offer, we process your payment quickly through your preferred method. Our seamless and secure payout system ensures that you get paid without delays, and without any hidden fees.",
        },
    ];


    return (
        <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold mb-2 text-center dark:text-gray-150">
                    How It Works !
                </h2>
                <span className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                    Selling your unused software license is fast and simple. Follow these three easy steps to turn idle software into instant value.
                </span>
                </div>
                <div className="space-y-24 w-full">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:flex-row-reverse md:flex" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full h-full">
                                <img
                                    src={step.img}
                                    alt={`Step ${idx + 1}`}
                                    className="rounded-xl shadow-lg w-full h-full max-h-[400px] object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col md:max-w-[30vw] justify-center items-center h-full text-center md:text-left px-4">
                                {/* <div className="text-indigo-600 dark:text-indigo-400 text-2xl font-bold mb-2">
                  Step {idx + 1}
                </div> */}
                                <h3 className="text-3xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
