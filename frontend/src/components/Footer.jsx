import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer id="colophon" className="dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:text-white bg-white text-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
            <h5 className="mb-4 text-xl font-bold border-b-2 border-gray-500 pb-2">Products</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="https://www.hackerrank.com/products/screen/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Screen</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/products/interview/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Interview</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/features/certified-assessments/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Certified Assessments</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/features/plagiarism-detection/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Plagiarism Detection</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/features/real-world-questions/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Real World Questions</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
            <h5 className="mb-4 text-xl font-bold border-b-2 border-gray-500 pb-2">Solutions</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="https://www.hackerrank.com/solutions/skills-strategy/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Set Up a Skills Strategy</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/solutions/talent-brand/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Showcase Your Talent Brand</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/solutions/optimize-hiring/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Optimize Your Hiring Process</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/solutions/internal-mobility/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Mobilize Your Internal Talent</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/products/ai/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Embrace AI</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8 sm:mb-0">
            <h5 className="mb-4 text-xl font-bold border-b-2 border-gray-500 pb-2">Resources</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="/blog/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Blog</a></li>
              <li className="mb-2"><a href="/customers/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Customer Stories</a></li>
              <li className="mb-2"><a href="/roles-directory" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Roles Directory</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/partners/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Partners</a></li>
              <li className="mb-2"><a href="/integrations/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Integrations</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/whats-new/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">What’s New</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 px-4">
            <h5 className="mb-4 text-xl font-bold border-b-2 border-gray-500 pb-2">About Us</h5>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="https://www.hackerrank.com/careers/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Careers</a></li>
              <li className="mb-2"><a href="/about-us/our-team/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Our Team</a></li>
              <li className="mb-2"><a href="https://www.hackerrank.com/about-us/newsroom/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Newsroom</a></li>
              <li className="mb-2"><a href="https://status.hackerrank.com/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">Status</a></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://facebook.com/" className="dark:text-white hover:text-gray-400 transition-colors duration-200">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
