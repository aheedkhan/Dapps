import { ROUTE } from "/src/utils/constants";
import { useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
  const category = [
    {
      img: "https://preview.colorlib.com/theme/photosen/images/nature_small_6.jpg.webp",
      categ: "Nature",
    },
    {
      img: "https://th.bing.com/th/id/OIP.-_6YlTT91i0ZEN6vR2kByQHaEo?rs=1&pid=ImgDetMain",
      categ: "Architecture",
    },
    {
      img: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&w=600",
      categ: "Culture",
    },
    {
      img: "https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Travel",
    },
    {
      img: "https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Sports",
    },
    {
      img: "https://images.pexels.com/photos/13341774/pexels-photo-13341774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Wildlife",
    },
    {
      img: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Fashion",
    },
    {
      img: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Automobiles",
    },
    {
      img: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Life Style",
    },
    {
      img: "https://images.pexels.com/photos/842654/pexels-photo-842654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Long Exposure",
    },
    {
      img: "https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      categ: "Pets",
    },
    {
      img: "https://images.pexels.com/photos/1805268/pexels-photo-1805268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
