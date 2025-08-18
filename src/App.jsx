import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { Typewriter } from "react-simple-typewriter";
import ScrollToTop from "./components/ScrollToTop";

const tahunMulai = 2022;
const tahunSekarang = new Date().getFullYear();
const tahunPengalaman = tahunSekarang - tahunMulai;

function App() {
  return (
    <>
      <div className="mt-10">
        <div className="hero grid md:grid-cols-2 items-center xl:gap-0 gap-6 grid-cols-1 px-10 mb-25">
          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="mb-3 bg-blue-800 w-fit p-4 rounded-2xl">
              <p>
                <i class="ri-checkbox-circle-line ri-lg"></i> Available for
                Freelance work
              </p>
            </div>
            <h1 className="text-4xl/tight font-bold mb-3">
              Hi, I'm Rieski Dhanu Saputra
            </h1>
            <h1 className="text-4xl font-bold mb-3 text-yellow-300">
              <Typewriter
                words={[
                  "Web Developer",
                  "UI / UX Designer",
                  "Graphic Designer",
                ]}
                loop={0}
                cursor
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1500}
              />
            </h1>
            <p className="text-base/loose mb-3">
              Saya memiliki ketertarikan dalam bidang Programming dan Desain,
              khususnya dalam pembuatan website serta desain grafis seperti
              poster, pamflet, banner, dan konten media sosial. Pengalaman di
              bidang sudah berlangsung selama lebih dari 6 tahun, mencakup
              berbagai proyek kreatif dan pengembangan digital.
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="#proyek"
                className="bg-yellow-500 p-4 rounded-2xl hover:bg-yellow-400 text-black"
              >
                Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
              </a>
              <a
                href="#kontak"
                className="bg-blue-800 p-4 rounded-2xl hover:bg-blue-400"
              >
                Contact Me <i class="ri-mail-line ri-lg"></i>
              </a>
            </div>
          </div>
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[500px] rounded-xl md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
            loading="lazy"
          />
        </div>

        {/* Tentang */}
        <div className="tentang py-15 bg-white px-10" id="tentang">
          <h1
            className="text-center text-4xl text-black font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tentang
          </h1>
          <p
            className="text-base/loose text-center text-black"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Sangat bersemangat menciptakan solusi inovatif melalui teknologi
          </p>
          <div
            className="w-full mx-auto p-7 bg-blue-800 rounded-lg mt-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md mb-5 sm:hidden"
              loading="lazy"
            />
            <p className="text-base/loose mb-10">
              Hallo, perkenalkan saya Rieski Dhanu Saputra, seorang mahasiswa
              Teknik Informatika di Universitas Amikom Yogyakarta yang memiliki
              passion atau ketertarikan dalam pengembangan website, UI/UX
              desain, desain grafis dan tentunya bidang teknologi. Saya senang
              mempelajari hal-hal baru dan selalu berusaha untuk mengembangkan
              kemampuan saya dalam bidang programming khususnya dalam Web
              Development dan UI/UX Design.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                alt="Image"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    6<span className="text-yellow-500">+</span>
                  </h1>
                  <p>Project Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    {tahunPengalaman}
                    <span className="text-yellow-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-10 text-black">
            <h1
              className="text-center text-4xl text-black font-bold mb-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Tools
            </h1>
            <p
              className="text-base/loose text-center text-black"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Berikut tools-tools yang di pakai untuk pembuatan website ataupun
              desain.
            </p>
            <div className="text-white tools-box mt-7 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tool) => (
                <div
                  className="flex items-center gap-2 p-3 bg-blue-800 border border-blue-800 rounded-md hover:bg-blue-700 hover:border-blue-400/30 transition-all duration-300 ease-in-out 
                shadow-sm hover:shadow-blue-500/20 text-white transform hover:scale-[1.02] group"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tool.dad}
                  data-aos-once="true"
                >
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-14 bg-blue-900 p-1 rounded-md group-hover:bg-blue-900  transform transition duration-300 hover:rotate-3 hover:scale-105"
                  />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-60">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tentang */}

        {/* Project */}
        <div className="proyek mt-10 py-5 px-10" id="proyek">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Project
          </h1>
          <p
            className="text-base/loose text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa project yang telah saya buat
          </p>
          <div className="proyek-box mt-7 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-blue-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <img
                  src={proyek.gambar}
                  alt="Proyek Image"
                  loading="lazy"
                  className="transform transition duration-300 hover:rotate-3 hover:scale-105"
                />
                <div>
                  <h1 className="text-2xl font-bold my-2">{proyek.nama}</h1>
                  <p className="text-base/loose mb-2">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-blue-900 bg-blue-900 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Project */}

        {/* Kontak */}
        <div className="kontak mt-10 sm:p-10 p-5 bg-white px-10" id="kontak">
          <h1
            className="text-4xl font-bold text-center text-black mt-10 mb-5 md:mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Kontak
          </h1>
          <div className="grid md:grid-cols-2 gap-10 grid-cols-1 mb-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl text-left text-black">
                <i className="ri-chat-3-line ri-lg"></i> Connect With Me
              </h1>
              <p className="text-black">
                Ayo ikuti media sosial saya untuk update terbaru seputar proyek,
                karya, dan perjalanan kreatif saya. Mari berkolaborasi dan
                wujudkan sesuatu yang luar biasa bersama!
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://linkedin.com/in/rieskidhanusaputra"
                  target="_blank"
                  className="flex items-center gap-3 bg-blue-800 p-2 w-full rounded-md text-white hover:bg-blue-700 transition"
                >
                  <i className="ri-linkedin-box-fill ri-3x transform transition duration-300 hover:rotate-3 hover:scale-105"></i>
                  <div>
                    <h1 className="font-bold">LinkedIn</h1>
                    <p>@rieskidhanusaputra</p>
                  </div>
                </a>
                <a
                  href="https://github.com/rieskidhanusaputra"
                  target="_blank"
                  className="flex items-center gap-3 bg-blue-800 p-2 w-full rounded-md text-white hover:bg-blue-700 transition"
                >
                  <i className="ri-github-fill ri-3x transform transition duration-300 hover:rotate-3 hover:scale-105"></i>
                  <div>
                    <h1 className="font-bold">Github</h1>
                    <p>@rieskidhanusaputra</p>
                  </div>
                </a>
                <a
                  href="https://instagram.com/rieskidhanu"
                  target="_blank"
                  className="flex items-center gap-3 bg-blue-800 p-2 w-full rounded-md text-white hover:bg-blue-700 transition"
                >
                  <i className="ri-instagram-fill ri-3x transform transition duration-300 hover:rotate-3 hover:scale-105"></i>
                  <div>
                    <h1 className="font-bold">Instagram</h1>
                    <p>@rieskidhanu</p>
                  </div>
                </a>
                <a
                  href=""
                  target=""
                  className="flex items-center gap-3 bg-blue-800 p-2 w-full rounded-md text-white hover:bg-blue-700 transition"
                >
                  <i className="ri-youtube-fill ri-3x transform transition duration-300 hover:rotate-3 hover:scale-105"></i>
                  <div>
                    <h1 className="font-bold">Youtube</h1>
                    <p>@rieskidhanuYt</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl text-left text-black">
                <i class="ri-mail-line ri-lg"></i> Contact Form
              </h1>
              <p className="text-black">
                Punya proyek yang ingin dikerjakan? Kirim pesan ke saya, dan
                saya akan menghubungi Anda sesegera mungkin.
              </p>
              <form
                action="https://formsubmit.co/rieski.dhanu17@gmail.com"
                method="POST"
                className="bg-blue-800 p-8 w-full rounded-md"
                autoComplete="off"
              >
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Nama Lengkap</label>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Masukkan Nama..."
                      className="border border-blue-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Masukkan Email..."
                      className="border border-blue-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pesan" className="font-semibold">
                      Pesan
                    </label>
                    <textarea
                      name="pesan"
                      id="pesan"
                      rows="7"
                      placeholder="Pesan..."
                      className="border border-blue-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-yellow-500 p-3 rounded-lg cursor-pointer w-full hover:bg-yellow-400"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
