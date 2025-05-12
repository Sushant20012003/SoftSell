import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <ChatWidget />
            <Footer />
        </>
    )
}
