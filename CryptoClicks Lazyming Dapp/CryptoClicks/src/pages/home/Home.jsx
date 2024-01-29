import { ROUTE } from "/src/utils/constants";
import { useNavigate } from "react-router-dom";
import NatureImage from "/src/assets/images/Nature.webp";
import ArchitectureImage from "/src/assets/images/Architecture.webp";
import automobileImage from "/src/assets/images/automobile.webp";
import creativityImage from "/src/assets/images/creativity.webp";
import cultureImage from "/src/assets/images/culture.webp";
import fashionImage from "/src/assets/images/fashion.webp";
import lifestyleImage from "/src/assets/images/lifestyle.webp";
import longexpoImage from "/src/assets/images/longexpo.webp";
import petsImage from "/src/assets/images/pets.webp";
import sportsImage from "/src/assets/images/sports.webp";
import travelImage from "/src/assets/images/travel.webp";
import wildlifeImage from "/src/assets/images/wildlife.webp";

export default () => {
  const navigate = useNavigate();
  const category = [
    {
      img: NatureImage,
      categ: "Nature",
    },
    {
      img: ArchitectureImage,
      categ: "Architecture",
    },
    {
      img: cultureImage,
      categ: "Culture",
    },
    {
      img: travelImage,
      categ: "Travel",
    },
    {
      img: sportsImage,
      categ: "Sports",
    },
    {
      img: wildlifeImage,
      categ: "Wildlife",
    },
    {
      img: fashionImage,
      categ: "Fashion",
    },
    {
      img: automobileImage,
      categ: "Automobiles",
    },
    {
      img: lifestyleImage,
      categ: "Life Style",
    },
    {
      img: longexpoImage,
      categ: "Long Exposure",
    },
    {
      img: petsImage,
      categ: "Pets",
    },
    {
      img: creativityImage,
      categ: "Creativity",
    },
  ];

  return (
    <section className="bg-black mx-auto px-4 max-w-screen-xl mb-6 font-josefin select-none">
      <div className=" grid gap-8 sm:grid-cols-2  lg:grid-cols-3">
        {category.map((items, key) => (
          <div
            className="z-0 group shadow-cyan-500/50 grayscale filter transition hover:grayscale-0 overflow-hidden contrast-105

    "
            key={key}
          >
            <a className="hover:cursor-pointer" href={items.href}>
              <img
                src={items.img}
                className="group-hover:scale-105 group-hover:brightness-75 duration-500 h-custom w-full object-cover object-center "
                loading="lazy"
                alt={items.Name}
              />
              <h2 className=" absolute font-semibold top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-4xl ">
                {items.categ}
              </h2>
              <button
                onClick={() => {
                  navigate(ROUTE.GALLERY);
                }}
                class="font-josefin w-40 h-10 mt-5 bg-transparent cursor-pointer  border-2 border-[#fff] shadow-[inset_0px_-2px_0px_1px_#fff]  hover:bg-[#fff] transition  ease-in-out absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group/button active:scale-95 duration-500"
              >
                <span class="font-medium text-[#fff] group-hover/button:text-black">
                  More NFTs
                </span>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
