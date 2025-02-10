import FAQItem from "./FAQItem";

const FAQList = () => {
  const faqs = [
    { question: "Why do people hire professional painters?", answer: "Professional painters ensure high-quality work, proper surface preparation, and long-lasting results." },
    { question: "How much would wall painters cost to paint an exterior house?", answer: "Costs vary based on the size, paint type, and location. On average, it ranges from $2,000 to $5,000." },
    { question: "What are the factors affecting the painting cost?", answer: "Factors include surface area, paint quality, labor costs, and additional preparation work." },
    { question: "What are all expense categories which come under house painting?", answer: "Expenses include labor, paint, primers, tools, and protective materials." },
    { question: "What is the average total cost to paint the interior surfaces of a house in square feet?", answer: "It generally ranges from $1.50 to $3.50 per square foot, depending on complexity." },
    { question: "How much does the painting per square foot cost?", answer: "Painting costs per square foot range between $1 to $4 based on location and material." },
    { question: "What is a Paint Calculator and describe how much paint do I need?", answer: "A paint calculator helps estimate the amount of paint required based on wall dimensions and coverage." }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently <span className="highlight">Asked Questions</span></h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQList;
