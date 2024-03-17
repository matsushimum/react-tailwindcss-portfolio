import './App.css'

function App() {

  return (
    <>
    <header  className="text-gray-700 border-b border-gray-200">
      {/* containerというクラスを付けることによって自動的にレスポンシブルデザインできる */}
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">ShinCode</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300">About</a>
          <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
          <a href="#Blog" className=" hover:text-blue-400 duration-300">Blog</a>
        </nav>
      </div>
    </header>
    
    <section className="text-gray-700" id="home">
      {/* flex-col md:flex-rowの描き方はレスポンシブデザインで横並びと縦並びを操作できる */}
      <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium ,mb-4">Hi!
            <br />
            I'm ShinCode
            <br />
            Web Developer
          </h1>
          <p className="mb-8 leading-relaxed mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique voluptates totam eligendi, illum ipsa dolorem perferendis natus id vitae voluptatibus?</p>
          <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Contact Me</button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/icon.jpg" alt="" />
        </div>
      </div>
    </section>

    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">About me</h1>
          <p className="pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab voluptate impedit dignissimos, tenetur laborum illo. Eligendi delectus velit quas.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse veritatis sed molestiae provident quam aspernatur corrupti officiis. Est repellat nulla sint, illo minima at neque eius, vel totam ratione perferendis. Totam autem dolores deleniti quia consectetur animi in consequuntur nisi fuga sequi, sit magnam! Veniam doloribus harum error natus saepe vel nobis ratione? Velit exercitationem rerum quasi aliquam voluptates minus facere tenetur quia repudiandae expedita, sapiente quidem soluta omnis provident asperiores nisi cumque facilis labore, doloribus ipsa a saepe officia dolorem optio. Id ullam exercitationem dolor temporibus maiores reiciendis inventore eaque. Quisquam cumque sapiente ex neque error, sequi illo?</p>
        </div>
        {/* カードのdivタグ */}
        <div className="flex flex-wrap">
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
    fill="currentColor"
  />
                </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestias cum! Expedita nihil qui nisi unde sunt ad sit maxime.
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっとみる
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
    fill="currentColor"
  />
                </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestias cum! Expedita nihil qui nisi unde sunt ad sit maxime.
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっとみる
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 p-4">
            <div className="bg-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-3">
                <div className="bg-green-500 text-white rounded-full">
                <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
    fill="currentColor"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
    fill="currentColor"
  />
                </svg>
                </div>
                <h2 className="text-gray-900 text-lg font-medium ml-2">Web Developer</h2>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestias cum! Expedita nihil qui nisi unde sunt ad sit maxime.
                </p>
                <a href="#" className="flex mt-3 text-green-500 items-center">
                  もっとみる
                  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
    fill="currentColor"
  />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* left side */}
        <div className="mb-10 lg:mb-0 w-full flex justify-center">
          <img src="./img/pc.jpg" alt=""  className="rounded size-[48rem]"/>
        </div>
        {/* right side */}
        <div className="lg:pl-12 lg:py-6 w-full lg:1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10">My Skills</h1>
          <div className="w-full">
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs .leading-none py-1 text-center text-white" style={{width:"85%"}}>85%</div>
            </div>
            <h2>CSS</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs .leading-none py-1 text-center text-white" style={{width:"70%"}}>70%</div>
            </div>
            <h2>Javascript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs .leading-none py-1 text-center text-white" style={{width:"60%"}}>60%</div>
            </div>
            <h2>C++</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div className="bg-green-600 text-xs .leading-none py-1 text-center text-white" style={{width:"100%"}}>100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App;
