"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImFlag } from "react-icons/im";
import { FaRegImages } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
const About = () => {
  const [activeTab, setActiveTab] = useState("Insight");

  const contentData = {
    Insight: {
      text: "<strong>This insight</strong>  led to a radical rethinking of the training model. Instead of relying on limited sessions and intuition-driven methods, our approach blends behavioral science with technology to achieve measurable, long-term impact. WRIGHTS is the culmination of years spent asking how to nudge employees towards small, incremental improvements every day—ultimately leading to genuine behavioral transformation.",
      image: "/image/about1.png",
    },
    OurValues: {
      text: "At the core of <strong>our values</strong>, we believe in placing employees at the center of their own growth. We never use training for evaluation purposes. Instead, we provide each participant with a clear picture of where they currently stand through a 360-degree behavioral feedback report. Armed with this knowledge, employees receive AI-powered nudges tailored to their unique areas of improvement—no forced directives or top-down mandates. By democratizing the process and removing the pressure of HR-led evaluations, we empower individuals to embrace their own growth journey.",
      image: "/image/about1.png",
    },
    UniqueApproach: {
      text: "Our <strong>unique approach</strong> lies in our ultra-customized follow-ups. While traditional programs might end with a two-day workshop, WRIGHTS extends well beyond the classroom. We combine initial training sessions with a 120-day follow-up period, delivering daily nudges guided by the individual’s behavioral feedback scores. After this period, we generate a second behavioral report so participants can compare their progress, see tangible improvements, and understand the true value of consistent, incremental growth.",
      image: "/image/about1.png",
    },
    WhoDoWeServe: {
      text: "<strong>Who do we serve?</strong> Our solution is flexible and scalable, making it just as effective for a company with a handful of managers as it is for an organization with 10,000+ employees. Because our pricing aligns with the nudges delivered rather than the duration of training, even smaller teams can access the same high-impact, tech-driven behavioral insights traditionally reserved for larger enterprises.",
      image: "/image/about1.png",
    },
  };
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBarClick = (tab) => {
    setActiveTab(tab);
  };
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSelectTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const tabContent = [
    {
      text: "It encourages learning and exchange of ideas, it fuels innovation and performance improvement. It also build trust among team members.",
      imageSrc: "/image/about4.jpeg",
    },
    {
      text: "Innovation drives growth, and embracing future challenges creates an environment of continuous improvement and learning.",
      imageSrc: "/image/innovative.jpg",
    },
    {
      text: "Empathy enables stronger connections, understanding different perspectives, and taking action to make meaningful impacts.",
      imageSrc: "/image/teamwork.jpg",
    },
    {
      text: "Effective communication fosters clarity, collaboration, and shared understanding across teams and organizations.",
      imageSrc: "/image/Communicate.jpg",
    },
  ];

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,  
      }
    );

    const element = document.querySelector('.aboutSection1');
    if (element) {
      observer.observe(element);
    }

 
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [isInViews, setIsInViews] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInViews(true);
        }
      },
      {
        threshold: 0.5,  
      }
    );

    const element = document.querySelector('.aboutSection1');
    if (element) {
      observer.observe(element);
    }

 
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const [scale, setScale] = useState(1);  

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
   
    const scaleValue = 1 - scrollPosition / 1000; 
    setScale(Math.max(scaleValue, 0.8));  

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }  
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);




  const containerRef = useRef(null); // Updated name

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.aboutSectionCart');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <div className="aboutContent">
            <h2>
               Our Commitment to LASTING Change</h2>
            <p>
              By blending data-driven insights, personalized nudges, and
              practical interventions, we help employees become their best
              selves and organizations thrive.
            </p>
            <button className="bookDemo-btn">Book a Demo</button>
          </div>
        </div>
      </div>
      <div className={`aboutSection1 ${isInView ? 'inView' : ''}`}>
      <div className="aboutSection1Head">
        <h2>It all began with a single question</h2>
      </div>
      <div className="aboutSection1Content">
        <p>
          WRIGHTS began as a quest to answer a critical question faced by training professionals everywhere: "How do we create lasting behavioral change?" After more than a decade in Training & Development, we realized that traditional short-term workshops, no matter how well-crafted, rarely produce enduring changes in employee behavior.
        </p>
      </div>
    </div>
    <div className={`aboutSection2 ${isInViews ? 'inView' : ''}`}>
      <div className="aboutSection2Container">
        <div className="aboutSection2Content">
        <p dangerouslySetInnerHTML={{ __html: contentData[activeTab].text }} />
        </div>
        <div className="aboutSection2Img">
          <img src={contentData[activeTab].image} alt={activeTab} />
        </div>
      </div>
      <div className="aboutSection2Tabs">
        <div
          className={`tab ${activeTab === "Insight" ? "active" : ""}`}
          onClick={() => handleTabClick("Insight")}
        >
          Insight
        </div>
        <div
          className={`tab ${activeTab === "OurValues" ? "active" : ""}`}
          onClick={() => handleTabClick("OurValues")}
        >
          Our Values
        </div>
        <div
          className={`tab ${activeTab === "UniqueApproach" ? "active" : ""}`}
          onClick={() => handleTabClick("UniqueApproach")}
        >
          Unique Approach
        </div>
        <div
          className={`tab ${activeTab === "WhoDoWeServe" ? "active" : ""}`}
          onClick={() => handleTabClick("WhoDoWeServe")}
        >
          Who do we serve?
        </div>
      </div>
      <div className="aboutSection2Bar">
        <div
          className="bar1"
          style={{
            backgroundColor:
              activeTab === "Insight" ? "rgba(0, 33, 54, 1)" : "transparent",
          }}
          onClick={() => handleBarClick("Insight")}
        ></div>
        <div
          className="bar2"
          style={{
            backgroundColor:
              activeTab === "OurValues"
                ? "rgba(0, 33, 54, 1)"
                : "transparent",
          }}
          onClick={() => handleBarClick("OurValues")}
        ></div>
        <div
          className="bar3"
          style={{
            backgroundColor:
              activeTab === "UniqueApproach"
                ? "rgba(0, 33, 54, 1)"
                : "transparent",
          }}
          onClick={() => handleBarClick("UniqueApproach")}
        ></div>
        <div
          className="bar4"
          style={{
            backgroundColor:
              activeTab === "WhoDoWeServe"
                ? "rgba(0, 33, 54, 1)"
                : "transparent",
          }}
          onClick={() => handleBarClick("WhoDoWeServe")}
        ></div>
      </div>
    </div>
      <div className="aboutSection3">
        <div className="aboutSection3Head">
          <h2>Our Vision</h2>
        </div>
        <div className="aboutSection3Content">
          <p>
              <span>To empower individuals with data-driven insights and AI-powered nudges, making everyday behaviors the foundation for lasting change.</span>
          </p>
        </div>
      </div>
      <div
      className={`aboutSection4 ${isVisible ? "animate-visible" : "animate-hidden"}`}
      ref={sectionRef}
    >
        <div className="aboutSection4Container">
          <div className="aboutSection4Head">
            <h2>Our Values</h2>
          </div>
          <div className="aboutSection4Content">
            <div className="valueTabs">
              <div
                className={`valueTab ${selectedTab === 0 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(0)}
              >
                <ImFlag />
                <div className="valueContent">
                  <p>Challenge the Status Quo</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 1 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(1)}
              >
                <FaRegImages />
                <div className="valueContent">
                  <p>Innovate the Future</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 2 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(2)}
              >
                <FaHeart />
                <div className="valueContent">
                  <p>Empathy in Action</p>
                </div>
              </div>

              <div
                className={`valueTab ${selectedTab === 3 ? "active" : ""}`}
                onClick={() => handleSelectTabClick(3)}
              >
                <HiOutlineSpeakerphone />
                <div className="valueContent">
                  <p>Communicate with Purpose</p>
                </div>
              </div>
            </div>
          </div>

          <div className="aboutSection4Sliders">
            <div className="aboutSlider">
              <div className="aboutSliderContent">
                {tabContent[selectedTab].text}
              </div>
              <div className="aboutSliderimg">
                <img
                  src={tabContent[selectedTab].imageSrc}
                  alt="slider image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSection5">
      <div className="aboutSection5Contanier" ref={containerRef}>
          <div className="aboutSection5Head">
            <h2>Our Team</h2>
          </div>
          <div className="aboutSectionContent">
            {/* Card 1 */}
            <div className="aboutSectionCart">
              <img src="/image/team1.png" alt="Team Member 1" />
              <div className="aboutSectionCartContainer">
                <div className="aboutSectionMember">
                  <h2>Mr. Ephrem</h2>
                  <p>Co-Founder</p>
                </div>
                <CiCirclePlus />
              </div>
            </div>

            {/* Card 2 */}
            <div className="aboutSectionCart">
              <img src="/image/team2.png" alt="Team Member 2" />
              <div className="aboutSectionCartContainer">
                <div className="aboutSectionMember">
                  <h2>Mr. Infant Ivan</h2>
                  <p>Technical Architect </p>
                </div>
                <CiCirclePlus />
              </div>
            </div>

            {/* Card 3 */}
            <div className="aboutSectionCart">
              <img src="/image/team3.png" alt="Team Member 3" />
              <div className="aboutSectionCartContainer">
                <div className="aboutSectionMember">
                  <h2>Mr. Subramaniam</h2>
                  <p>Advisor - Director - Blockchain, Crypto, and Digital Currencies at Paypaul</p>
                </div>
                <CiCirclePlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
