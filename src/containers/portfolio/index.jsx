import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "Portfolio Website",
    description: "Built using React.js showcasing skills, resume, and contact form.",
    link: "#",
  },
  {
    id: 2,
    name: "ELABS Activities",
    description: "Participated in technical workshops and collaborative coding sessions.",
    link: "#",
  },
  {
    id: 3,
    name: "CyberVault Participation",
    description: "Engaged in cybersecurity awareness and ethical hacking discussions.",
    link: "#",
  },
  {
    id: 2,
    name: "DSA Practice",
    description: "Solved problems using C++ focusing on arrays, recursion, and basics of DP.",
    link: "#",
  },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Learning" },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Work & Learning"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <div className="placeholder-card">
                  <h3>{item.name}</h3>
                </div>
              </div>

              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.description}</p>
                    <button
                      onClick={() =>
                        item.link !== "#" && window.open(item.link)
                      }
                    >
                      View
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;