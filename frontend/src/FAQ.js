import React, { useState } from "react";
import "./styles/FAQ.css"; // Make sure this file exists

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "Why do people hire professional painters?", answer: "People hire professional painters for quality, efficiency, and expertise in handling paint jobs." },
        { question: "How much would wall painters cost to paint an exterior house?", answer: "The cost depends on the size of the house, paint quality, and labor charges." },
        { question: "What are the factors affecting the painting cost?", answer: "Factors include wall size, paint quality, labor costs, and surface preparation." },
        { question: "What are all expenses categories which come under house painting?", answer: "Expenses include paint cost, labor charges, primer, and additional coatings." },
        { question: "What is the average total cost to paint the interior surfaces of a house in square feet?", answer: "The cost varies by location, but it's generally calculated per square foot." },
        { question: "How much does the painting per square foot cost?", answer: "It depends on paint type, texture, and complexity of the work." },
        { question: "What is a Paint Calculator and describe how much paint do I need?", answer: "A paint calculator helps estimate the required amount of paint based on wall dimensions." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {/* Left Section - Heading */}
            <div className="faq-heading-container">
                <h2>Frequently</h2>
                <h2 className = "faq-bold">Asked Questions</h2>
            </div>

            {/* Right Section - FAQ Boxes (Stacked Vertically) */}
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${activeIndex === index ? "active" : ""}`} 
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                            <span className={`arrow ${activeIndex === index ? "rotated" : ""}`}>▼</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
