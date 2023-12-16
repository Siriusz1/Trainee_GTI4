import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

function Form() {
  return (
    <section
      className="min-h-screen bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="flex flex-col min-h-screen bg-black/60">
        <div className="container flex flex-col flex-1 px-6 py-12 mx-auto mt-5">
          <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-white lg:w-1/2 lg:text-[5px] lg:mx-6">
              <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <span className="inline-block p-3 text-[#9D06FF] rounded-full bg-blue-100/80 dark:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-white">
                      Email
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 ">
                      Nosso time está aqui para ajudar.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      qualquercoisa@gmail.com.
                    </p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-[#9D06FF] rounded-full bg-blue-100/80 dark:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-white">
                      Live chat
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                     Nosso time está aqui para ajudar.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      Começe um novo chat.
                    </p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-[#9D06FF] rounded-full bg-blue-100/80 dark:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-white">
                      Escritório
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Venha dizer olá no nosso escritório.
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      Avenida Dos Jangadeiros, 468
                    </p>
                  </div>

                  <div>
                    <span className="inline-block p-3 text-[#9D06FF] rounded-full bg-blue-100/80 dark:bg-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </span>

                    <h2 className="mt-4 text-base font-medium text-white">
                      Telefone
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Segunda à Sexta - 20:00
                    </p>
                    <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                      +1 (555) 000-0000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-300 text-sm ">Estamos aqui também!</h3>

                <div className="flex mt-4 -mx-1.5 ">
                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-[#601E8F]"
                    href="#"
                  >
                    <div className="w-7 h-7">
                      <FaTwitter className="w-full h-full" />
                    </div>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-[#601E8F]"
                    href="#"
                  >
                    <div className="w-7 h-7">
                      <GrLinkedinOption className="w-full h-full" />
                    </div>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-[#601E8F]"
                    href="#"
                  >
                    <div className="w-7 h-7">
                      <FaInstagram className="w-full h-full"/>
                    </div>
                  </a>

                  <a
                    className="mx-1.5 text-white transition-colors duration-300 transform hover:text-[#601E8F]"
                    href="#"
                  >
                    <div className="w-7 h-7">
                      <FaFacebook className="w-full h-full" />
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">
                  Nos envie uma mensagem
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Pergunte-nos tudo! Adoraremos responder você.
                </p>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#9D06FF] focus:ring-[#601E8F]  focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Endereço de Email
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#9D06FF] focus:ring-[#601E8F] focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                      Mensagem
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      placeholder="Mensagem"
                    ></textarea>
                  </div>

                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#9D06FF] rounded-md hover:bg-[#601E8F] focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
