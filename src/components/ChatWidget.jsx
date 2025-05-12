import { useState, useEffect, useRef } from "react";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([{
        from: "bot", text: "Hi! Ask me anything about selling your license."
    }]);
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef(null);

    const exampleAnswers = {
        "how do i sell my license": "Just upload your license and we’ll evaluate it instantly!",
        "how long does payment take": "You’ll get paid within 24-48 hours after confirmation.",
        "what types of software can i sell": "You can sell licenses for any legitimate, transferable software, including productivity tools, antivirus, and dev tools.",
        "is selling used software legal": "Yes! Selling used software is legal under the EU Court of Justice ruling as long as it’s transferable.",
        "how do i know if my license is transferable": "Check your license terms. If unsure, upload it — we'll verify it for you.",
        "do i need proof of purchase": "Yes, we usually ask for a proof of purchase or invoice to confirm ownership.",
        "is my personal data safe": "Absolutely. Your data is encrypted and never shared with third parties.",
        "what happens after i upload my license": "We verify it, then provide an offer. Once accepted, we process your payment.",
        "how is pricing determined": "We assess based on software demand, version, and remaining validity.",
        "can i cancel after uploading": "Yes, until you accept the offer, there’s no obligation to proceed.",
        "how do i get paid": "We pay via bank transfer or PayPal, based on your choice.",
        "how long is the evaluation process": "Usually within a few hours, but can take up to 24 hours in rare cases.",
        "can i sell volume or multi-user licenses": "Yes, we accept multi-user or volume licenses as well.",
        "what if my license was bought on discount": "Discounted licenses can still be resold if they are transferable.",
        "do you accept international sellers": "Yes! We accept license owners from most countries.",
        "how can I track my request": "Once submitted, you’ll receive a unique ID to check your status anytime.",
        "what’s the minimum validity period to sell": "Your license should have at least 3 months of validity remaining.",
        "do you support OEM licenses": "OEM licenses are generally non-transferable, but we can check for exceptions.",
        "can I negotiate the price": "Our offers are based on market value, but feel free to reach out for bulk deals."
    };

    const handleSend = () => {
        const userMsg = { from: "user", text: input };
        const botResponse = {
            from: "bot",
            text: exampleAnswers[input.toLowerCase()] || "Sorry, I didn’t get that. Please ask another question."
        };

        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);

        setInput("");
    };

    useEffect(() => {
        chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
    }, [messages]);

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white z-50">
            <div className="fixed bottom-4 right-4">
                {open ? (
                    <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg w-80 p-4">
                        <div className="flex justify-between items-center mb-2">
                            <strong className="text-xl">SoftSell Chat</strong>
                            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">✖️</button>
                        </div>
                        <div
                            className="h-48 overflow-y-auto mb-3 border p-2 rounded dark:border-gray-600"
                            ref={chatContainerRef}
                        >
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`mb-1 text-sm ${msg.from === "bot"
                                        ? "text-left text-gray-700 dark:text-gray-300"
                                        : "text-right text-blue-600 dark:text-blue-400"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="mb-1 text-sm text-left text-gray-500 dark:text-gray-400">
                                    ...bot is typing
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <select
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                className="min-w-0 flex-1 border px-2 py-1 rounded dark:bg-gray-700 dark:text-white dark:border-gray-600 w-full sm:w-auto"
                            >
                                <option value="" disabled>Select a question...</option>
                                {Object.keys(exampleAnswers).map((question, idx) => (
                                    <option key={idx} value={question}>{question}</option>
                                ))}
                            </select>
                            <button
                                onClick={handleSend}
                                disabled={!input}
                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 w-full sm:w-auto"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        💬
                    </button>
                )}
            </div>
        </div>
    );
}
