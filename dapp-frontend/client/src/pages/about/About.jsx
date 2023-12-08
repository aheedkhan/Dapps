import vercelLogo from "/src/assets/logos/vercel-logotype-dark.png";
import metamaskLogo from "/src/assets/logos/full-metamask-logo.webp";
import ethereumLogo from "/src/assets/logos/ethereum-logo-landscape-black.png";
import nextjsLogo from "/src/assets/logos/nextjs-logotype-light-background.png";
import turboLogo from "/src/assets/logos/turbo-logotype-light-background.png";

export default function About() {
  return (
    <>
      <section className="font-josefin select-none">
        <h1 className="text-white text-center text-6xl my-16 select-none ">
          Crypto Clicks
        </h1>
        <div className="flex">
          <div className="w-1/2 p-4 h-about ">
            <img
              src="https://images.pexels.com/photos/1996911/pexels-photo-1996911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className=" w-full h-full object-cover object-center grayscale hover:grayscale-0 hover:scale-105 mx-4 duration-700 rounded-md"
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
      <hr />
      <section>
        <h1 className="text-white text-center text-4xl mt-16 select-none font-semibold font-josefin mb-8  ">
          Trusted Partners
        </h1>
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {/* LOGO 1 */}
          <li className="bg-white px-3 rounded-sm py-4 w-2/12">
            <img src={nextjsLogo} />
          </li>

          {/* LOGO 2 */}
          <li className="bg-white px-3 rounded-sm py-3 w-2/12">
            <img src={ethereumLogo} />
          </li>

          {/* LOGO 3 */}
          <li className="bg-white px-3 rounded-sm py-3 ">
            <svg
              className="w-40 h-12"
              viewBox="0 0 135 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.43 5C7.79992 5 0 12.7999 0 22.43C0 30.1428 4.98934 36.6572 11.9178 38.9667C12.7893 39.1192 13.1161 38.5963 13.1161 38.1388C13.1161 37.7248 13.0943 36.3522 13.0943 34.8924C8.715 35.6986 7.58205 33.8249 7.23345 32.8444C7.03736 32.3433 6.18765 30.7964 5.44687 30.3824C4.83682 30.0556 3.96532 29.2495 5.42509 29.2277C6.7977 29.2059 7.77814 30.4914 8.10495 31.0143C9.67365 33.6506 12.1792 32.9098 13.1814 32.4522C13.3339 31.3193 13.7915 30.5567 14.2926 30.121C10.4144 29.6852 6.36195 28.1819 6.36195 21.5149C6.36195 19.6194 7.03736 18.0507 8.14852 16.8306C7.97422 16.3949 7.36417 14.6083 8.32282 12.2117C8.32282 12.2117 9.78259 11.7541 13.1161 13.9982C14.5105 13.6061 15.992 13.41 17.4736 13.41C18.9551 13.41 20.4367 13.6061 21.8311 13.9982C25.1646 11.7323 26.6243 12.2117 26.6243 12.2117C27.583 14.6083 26.9729 16.3949 26.7986 16.8306C27.9098 18.0507 28.5852 19.5976 28.5852 21.5149C28.5852 28.2037 24.5109 29.6852 20.6328 30.121C21.2646 30.6657 21.8093 31.7115 21.8093 33.3455C21.8093 35.6768 21.7875 37.5505 21.7875 38.1388C21.7875 38.5963 22.1143 39.141 22.9858 38.9667C26.446 37.7986 29.4527 35.5748 31.5828 32.6083C33.7129 29.6418 34.8591 26.082 34.86 22.43C34.86 12.7999 27.0601 5 17.43 5Z"
                fill="#24292E"
              />
              <path
                d="M81.2557 30.843H81.2151C81.2334 30.843 81.2456 30.8633 81.2639 30.8654H81.2761L81.2557 30.845V30.843ZM81.2639 30.8654C81.0748 30.8674 80.5989 30.9671 80.0966 30.9671C78.5105 30.9671 77.9615 30.235 77.9615 29.2793V22.9124H81.1947C81.3777 22.9124 81.5201 22.7497 81.5201 22.526V19.0691C81.5201 18.886 81.3574 18.7234 81.1947 18.7234H77.9615V14.4327C77.9615 14.27 77.8598 14.1683 77.6768 14.1683H73.2844C73.1014 14.1683 72.9997 14.27 72.9997 14.4327V18.8454C72.9997 18.8454 70.7832 19.3944 70.6409 19.4147C70.4782 19.4554 70.3765 19.5978 70.3765 19.7604V22.526C70.3765 22.7497 70.5392 22.9124 70.7222 22.9124H72.9794V29.5822C72.9794 34.544 76.4363 35.0524 78.7952 35.0524C79.873 35.0524 81.1744 34.7067 81.3777 34.605C81.4998 34.5643 81.5608 34.422 81.5608 34.2796V31.2294C81.5636 31.1429 81.5351 31.0582 81.4806 30.991C81.426 30.9238 81.3491 30.8785 81.2639 30.8633V30.8654ZM129.45 26.3897C129.45 22.709 127.965 22.221 126.399 22.3837C125.179 22.465 124.203 23.075 124.203 23.075V30.233C124.203 30.233 125.2 30.9244 126.684 30.965C128.779 31.026 129.45 30.2736 129.45 26.3897ZM134.391 26.0643C134.391 33.0392 132.134 35.032 128.189 35.032C124.854 35.032 123.064 33.3442 123.064 33.3442C123.064 33.3442 122.983 34.2796 122.881 34.4016C122.82 34.5236 122.719 34.5643 122.597 34.5643H119.587C119.384 34.5643 119.201 34.4016 119.201 34.2186L119.242 11.6264C119.242 11.4434 119.404 11.2808 119.587 11.2808H123.919C124.102 11.2808 124.264 11.4434 124.264 11.6264V19.2927C124.264 19.2927 125.932 18.215 128.372 18.215L128.352 18.1743C130.792 18.1743 134.391 19.0894 134.391 26.0643ZM116.659 18.7234H112.389C112.165 18.7234 112.043 18.886 112.043 19.1097V30.172C112.043 30.172 110.924 30.965 109.399 30.965C107.874 30.965 107.427 30.2736 107.427 28.7485V19.0894C107.427 18.9064 107.264 18.7437 107.081 18.7437H102.729C102.546 18.7437 102.384 18.9064 102.384 19.0894V29.4806C102.384 33.9543 104.885 35.0727 108.322 35.0727C111.148 35.0727 113.446 33.5069 113.446 33.5069C113.446 33.5069 113.548 34.3 113.609 34.422C113.649 34.5236 113.792 34.605 113.934 34.605H116.659C116.883 34.605 117.005 34.4423 117.005 34.2593L117.045 19.0691C117.045 18.886 116.883 18.7234 116.659 18.7234ZM68.465 18.703H64.1337C63.9507 18.703 63.788 18.886 63.788 19.1097V34.0356C63.788 34.4423 64.0523 34.5847 64.398 34.5847H68.3023C68.709 34.5847 68.8107 34.4016 68.8107 34.0356V19.0487C68.8107 18.8657 68.648 18.703 68.465 18.703ZM66.3298 11.8298C64.7641 11.8298 63.5236 13.0702 63.5236 14.636C63.5236 16.2018 64.7641 17.4423 66.3298 17.4423C67.855 17.4423 69.0954 16.2018 69.0954 14.636C69.0954 13.0702 67.855 11.8298 66.3298 11.8298ZM99.8623 11.3214H95.5716C95.3886 11.3214 95.2259 11.4841 95.2259 11.6671V19.9841H88.495V11.6671C88.495 11.4841 88.3323 11.3214 88.1493 11.3214H83.818C83.6349 11.3214 83.4723 11.4841 83.4723 11.6671V34.2593C83.4723 34.4423 83.6553 34.605 83.818 34.605H88.1493C88.3323 34.605 88.495 34.4423 88.495 34.2593V24.6002H95.2259L95.1852 34.2593C95.1852 34.4423 95.3479 34.605 95.5309 34.605H99.8623C100.045 34.605 100.208 34.4423 100.208 34.2593V11.6671C100.208 11.4841 100.045 11.3214 99.8623 11.3214ZM61.4901 21.3262V32.9985C61.4901 33.0799 61.4698 33.2222 61.3681 33.2629C61.3681 33.2629 58.8262 35.0727 54.6372 35.0727C49.5738 35.0727 43.575 33.4866 43.575 23.0344C43.575 12.5822 48.8214 10.4267 53.9458 10.447C58.3789 10.447 60.1683 11.4434 60.453 11.6264C60.5344 11.7281 60.575 11.8095 60.575 11.9111L59.721 15.5308C59.721 15.7138 59.538 15.9375 59.3143 15.8765C58.5822 15.6528 57.4841 15.2054 54.9016 15.2054C51.9123 15.2054 48.6994 16.0595 48.6994 22.7904C48.6994 29.5212 51.7497 30.3143 53.9458 30.3143C55.8167 30.3143 56.4877 30.0906 56.4877 30.0906V25.4136H53.4985C53.2748 25.4136 53.1121 25.2509 53.1121 25.0679V21.3262C53.1121 21.1432 53.2748 20.9805 53.4985 20.9805H61.1038C61.3274 20.9805 61.4901 21.1432 61.4901 21.3262Z"
                fill="#24292E"
              />
            </svg>
          </li>

          {/* LOGO 4 */}
          <li className="bg-white px-3 rounded-sm py-4 w-2/12">
            <img src={vercelLogo} />
          </li>
          {/* LOGO 5 */}
          <li className="bg-white px-3 rounded-sm py-5 w-2/12">
            <img src={turboLogo} />
          </li>
          {/* LOGO 6 */}
          <li className="bg-white px-3 rounded-sm py-5 w-2/12">
            <img src={metamaskLogo} />
          </li>
        </ul>
      </section>
    </>
  );
}
