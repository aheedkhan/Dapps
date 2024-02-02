import vercelLogo from "/src/assets/logos/vercel-logotype-light.png";
import metamaskLogo from "/src/assets/logos/full-metamask-logo.jpg";
import ethereumLogo from "/src/assets/logos/ethereum-logo-landscape-black.png";
import aboutImage from "/src/assets/images/aboutImage.webp";
import turboLogo from "/src/assets/logos/turbo-logotype-dark-background.png";
// import reactLogo from "src/assets/logos/react.png";
// import pinataLogo from "/src\\assets\\logos\\pinata.png";
// import firebaseLogo from "/src\\assets\\logos\\firebase.png";
// import tailwindLogo from "/src\\assets\\logos\\tailwind.png";
// import truffleLogo from "/src\\assets\\logos\\truffle.png";
// import solidityLogo from "/src\\assets\\logos\\solidity.png";
export default function About() {
  const team = [
    {
      avatar:
        "https://media.licdn.com/dms/image/D5603AQGiUeqopYW5XA/profile-displayphoto-shrink_400_400/0/1673787175307?e=1707955200&v=beta&t=Rxxh-tlCR92qZz4vM-y6Yk1tLoBs6-HrlZtpDwP4Z1o",
      name: "Aheed Tahir",
      title: "Full Stack Developer ",
      desc: " A developer, cyber security student, and technology enthusiast who loves to code, build, and explore.      ",
      linkedin: "https://www.linkedin.com/in/aheed-tahir/",
      twitter: "https://x.com/AheedKhan6?t=jycJItBgJlzQpD5KaZ31_Q&s=09",
    },
    // {
    //   avatar: " https://www.au.edu.pk/Pages/Faculties/Faculty_Images/1376.jpg",
    //   name: "Yasir Ali",
    //   title: "Full Stack Developer ",
    //   desc: " A developer, cyber security student, and technology enthusiast who loves to code, build, and explore.      ",
    //   linkedin: "https://www.linkedin.com/in/aheed-tahir/",
    //   twitter: "https://x.com/AheedKhan6?t=jycJItBgJlzQpD5KaZ31_Q&s=09",
    // },
  ];

  return (
    <>
      <section className="font-josefin  mb-10">
        <h1 className="text-white text-center text-6xl my-16 select-none ">
          CryptoClicks
        </h1>
        <div className="flex">
          <div className="w-1/2 p-4 h-about ">
            <img
              src={aboutImage}
              className=" w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-105 mx-4 duration-1000 rounded-md"
            />
          </div>
          <div className="w-1/2 p-4 content-center">
            <h2 className=" px-10 text-white font-semibold text-3xl mb-2">
              Our Mission
            </h2>
            <p className="text-white font-extralight font-josefin px-10 text-base text-justify">
              Our mission at{" "}
              <a class="underline decoration-green-700">CryptoClicks</a> is to
              revolutionize the photography marketplace by leveraging blockchain
              technology. We aim to empower photographers by providing a
              platform where they can monetize their work in a cost-effective
              and efficient manner.{" "}
              <a class="underline decoration-green-700">CryptoClicks</a> is a
              decentralized application (dApp) designed specifically for
              photographers. It introduces a unique feature called “
              <a class="underline decoration-pink-300">lazyminting</a>” , which
              allows creators to list their photographs without incurring
              upfront gas fees. This is a game-changer in the world of digital
              art marketplaces, as it removes a significant barrier to entry for
              creators. <br />
              The idea behind{" "}
              <a class="underline decoration-green-700">CryptoClicks</a> is
              simple yet powerful. Photographers upload their image files along
              with relevant details and set a price for their work. The
              photographs are then categorized and listed on our marketplace.
              When a buyer shows interest and agrees to the listed price, the
              photograph is minted at that moment. This process not only saves
              creators from paying gas fees upfront but also saves their time.{" "}
              <a class="underline decoration-green-700">CryptoClicks</a> is more
              than just a marketplace; it’s a community for photographers. By
              focusing solely on photography, we ensure that the value of this
              art form is recognized and appreciated. We believe that
              <a class="underline decoration-green-700">CryptoClicks</a> can
              change the game by making the photography market more accessible
              and profitable for photographers around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h1 className="text-white text-center text-4xl mt-16 select-none font-semibold font-josefin mb-8  ">
          Our Trusted Partners
        </h1>
        <ul className="grid lg:grid-cols-4 gap-x-10 gap-y-6 items-start md:grid-cols-2 px-10 mb-4">
          {/* LOGO 1 */}
          <li className=" px-5 rounded-sm py-3 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer">
            <a href="https://ethereum.org/en/">
              <img src={ethereumLogo} />
            </a>
          </li>

          {/* LOGO 2 */}
          <li className=" px-5 rounded-sm py-4 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer">
            <a href="https://vercel.com/">
              <img src={vercelLogo} />
            </a>
          </li>
          {/* LOGO 3 */}
          <li className=" px-5 rounded-sm py-5 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer">
            <a href="https://turbo.build/repo">
              {" "}
              <img src={turboLogo} />
            </a>
          </li>
          {/* LOGO 4 */}
          <li className=" px-5 rounded-sm py-5 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer">
            <a href="https://metamask.io/">
              <img src={metamaskLogo} />
            </a>
          </li>
        </ul>
        {/* <section className="mt-14 text-center">
          <h3 className="text-white font-semibold  font-josefin select-none mb-10 text-4xl ">
            Our Technology
          </h3>
          <div className="grid grid-cols-6">
            <img className="" src="" />
            <img className="" src="" />
            <img className="" src="" />
            <img className="" src="" />
            <img className="" src="" />
            <img className="" src="" />
          </div>
        </section> */}
      </section>

      <section className="py-14 font-josefin select-none">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Meet Our Team
            </h3>
            <p className="text-white mt-3">
              Our website development team consists of talented professionals
              with diverse skills and expertise in web design, development, and
              maintenance. We are passionate about creating functional,
              engaging, and user-friendly websites that meet your business goals
              and expectations.
            </p>
          </div>
          <div className="mt-12 ">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((item, idx) => (
                <li key={idx} className="hover:scale-105 duration-700">
                  <div className="w-24 h-24 mx-auto ">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-white font-semibold sm:text-lg">
                      {item.name}
                    </h4>
                    <p className="text-green-700">{item.title}</p>
                    <p className="text-white mt-2">{item.desc}</p>
                    <div className="mt-4 flex justify-center gap-4 text-white">
                      <a href={item.twitter}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_80)">
                            <path
                              fill="currentColor"
                              d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_80">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                      <a href={item.linkedin}>
                        <svg
                          className="w-5 h-5 duration-150 hover:text-gray-500"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <g clip-path="url(#clip0_17_68)">
                            <path
                              fill="currentColor"
                              d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_17_68">
                              <path fill="currentColor" d="M0 0h48v48H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
