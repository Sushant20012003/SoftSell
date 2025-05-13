export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-purple-950 via-indigo-900 to-blue-800 text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Company */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About SoftSell</h3>
                        <p className="text-sm text-white/80">
                            SoftSell simplifies the process of buying and selling software licenses. We help users unlock value from unused licenses and provide businesses with cost-effective software solutions. Our platform ensures secure transfers, fair pricing, and full transparency every step of the way.
                        </p>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                <li><a href="#demo" className="hover:underline">Live Demo</a></li>
              </ul>
            </div> */}

                    {/* Call to Action */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                        <p className="text-sm text-white/80 mb-4">
                            Interested in seeing what a fast and clean marketing site looks like? Let's talk or request a walkthrough.
                        </p>
                        <a href="#contact" className="inline-block px-5 py-2 bg-yellow-400 text-black font-medium rounded hover:bg-yellow-300 transition">
                            Contact Now
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
                    <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-yellow-300"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
