import React, { useState, useRef } from "react";
import gsap from "gsap";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleRow = (index) => {
    const el = contentRefs.current[index];

    if (activeIndex === index) {
      // CLOSE
      gsap.to(el, {
        height: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
      setActiveIndex(null);
    } else {
      // CLOSE previous
      if (activeIndex !== null) {
        gsap.to(contentRefs.current[activeIndex], {
          height: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      }

      setActiveIndex(index);

      // OPEN new
      gsap.fromTo(
        el,
        { height: 0 },
        {
          height: "auto",
          duration: 0.6,
          ease: "power3.inOut",
        },
      );
    }
  };

  const data = [
    ["John Doe", "Working with this team was a game-changer for our business. Their strategies boosted our online presence significantly!"],
    ["Jane Smith", "The website they designed for us is stunning and user-friendly. We've seen a huge increase in customer engagement."],
    ["Michael Brown", "Their branding expertise helped us stand out in a crowded market. Highly recommend their services!"],
    ["Emily Davis", "The social media campaigns they ran for us were incredibly effective. Our sales doubled within months."],
    ["David Wilson", "A truly professional team that delivers results. Our new logo and branding have received amazing feedback."],
  ];

  return (
    <div className="w-full bg-[var(--color-surface)] mt-[11vw]">
      <div className="px-10 max-md:px-4">
        <h1 className="text-5xl max-md:text-3xl">Client Results</h1>
      </div>

      <div className="w-full mt-10">
        {data.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            {/* Top Row */}
            <div
              onClick={() => toggleRow(index)}
              className="grid grid-cols-3 items-center py-6 px-10 cursor-pointer max-md:grid-cols-2 max-md:items-start max-md:gap-2 max-md:px-4"
            >
              <h3 className="underline">{item[0]}</h3>
              <p className="text-center max-md:text-right">Review</p>
              <p className="justify-self-end underline max-md:col-span-2 max-md:justify-self-start">READ</p>
            </div>

            {/* Expandable Section */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden h-0"
            >
              <div className="grid grid-cols-3 gap-10 px-10 pb-12 pt-4 max-md:grid-cols-2 max-md:px-4">
                <div></div>

                <div>
                  <p className="mb-6">Services:</p>
                  <div className="flex flex-col gap-4">
                    <button className="border px-6 py-2 rounded-full w-fit">
                      INVESTOR DECK
                    </button>
                    <button className="border px-6 py-2 rounded-full w-fit">
                      SALES DECK
                    </button>
                  </div>
                </div>

                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="w-28 h-28 rounded-xl mb-6"
                  />
                  <p className="leading-relaxed text-sm">
                    {item[1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
