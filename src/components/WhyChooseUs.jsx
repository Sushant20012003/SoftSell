export default function WhyChooseUs() {
    const points = [
      { icon: "⚡", title: "Fast Transactions", desc: "Quick and easy process to sell your license." },
      { icon: "🔒", title: "Secure Platform", desc: "Your data and payments are secure with us." },
      { icon: "💼", title: "Trusted by Businesses", desc: "Used by companies globally." },
      { icon: "📞", title: "24/7 Support", desc: "We’re here whenever you need help." }
    ];
  
    return (
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-10 text-indigo-700 dark:text-indigo-400">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                <div className="text-4xl mb-3">{point.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-400">{point.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  