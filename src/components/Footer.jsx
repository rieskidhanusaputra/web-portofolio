const Footer = () => {
  return (
    <div className="py-4 px-20 flex md:flex-row flex-col gap-3 md:gap-0 justify-between items-center bg-blue-800">
      <h1 className="text-2xl font-bold">RieskiDhanu.</h1>
      <div className="flex gap-7">
        <a href="#beranda" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">Beranda</a>
        <a href="#tentang" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">Tentang</a>
        <a href="#proyek" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com/in/rieskidhanusaputra" target="_blank" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://github.com/rieskidhanusaputra" target="_blank" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://instagram.com/rieskidhanu" target="_blank" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="" target="" className="transform transition duration-300 hover:-translate-y-1 hover:scale-110">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
