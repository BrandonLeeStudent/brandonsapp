import Image from "next/image";

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-center">Resume</h1>
      <h1 className="text-2xl font-semibold mb-2 text-center">Brandon Lee</h1>
      <p>
        Detail-oriented Analyst experienced in analyzing financial data, preparing forecasts, variance 
        analyses, and budgeting reports to support business decision-making. Proficient in Microsoft 
        Excel with experience using Tableau, and SQL for data analysis and financial reporting. 
        Knowledgeable in financial statements, accounting principles, and corporate finance, with the 
        ability to monitor financial performance, identify trends, and assess risks. Strong analytical, 
        problem-solving, and collaboration skills, with experience working with cross-functional teams 
        to deliver actionable business insights and improve operational efficiency.
      </p>
      
      <h2 className="border-t border-gray-300">EDUCATION</h2>
      <p>University of South Florida - Tampa, FL Expected graduation: May 2027</p>
      <p>Bachelor's degree in business Analytics and Information Systems | GPA 3.37</p>

      <h2 className="border-t border-gray-300">EXPERIENCE</h2>
      <p>Grocery Clerk | May 2024 – Present | Publix - Bradenton, FL</p>
      <p>Arby's - Lakewood Ranch, FL | March 2022 – April 2023</p>

      <h2>INTERNSHIP EXPERIENCE</h2>
      <p>Marketing Assistant Summer 2022 | GFree - San Juan, PR</p>
      <ul>
        <li>Researched pricing data for ecommerce competition.</li>
        <li>Proposed price strategy based on gathered data.</li>
        <li>Fixed product description in the webpage to increase sales.</li>
      </ul>

      <Image
        src="/resume jp.jpg"
        alt="Resume JP"
        width={500}
        height={500}
      />
    </section>
  );
}