import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import projects from "../utils/projects";
import { 
  SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiNextdotjs, 
  SiPython, SiDjango, SiTypescript, SiGraphql, SiDocker, 
  SiMongodb, SiPostgresql, SiRedux, SiExpress,SiAxios,SiReactrouter 
} from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Mapping of technology names to their respective icons
const techIcons = {
  React: SiReact,
  Tailwind: SiTailwindcss,
  JavaScript: SiJavascript,
  Node: SiNodedotjs,
  NextJS: SiNextdotjs,
  Python: SiPython,
  Django: SiDjango,
  TypeScript: SiTypescript,
  GraphQL: SiGraphql,
  Docker: SiDocker,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redux: SiRedux,
  Express: SiExpress,
  Axios:SiAxios,
  ReactRouter : SiReactrouter
  
};

const Projects = () => {
  return (
    <>
      <div className="mx-auto text-center sm:mt-0 mt-32">
        <h2 className="text-4xl font-bold uppercase text-custom-teal font-quicksand">Projects</h2>
      </div>
      <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="w-full"
      >
        {projects.map((proj) => (
          <SwiperSlide key={proj.id} className="pb-12">
            <div className="gap-6 p-4">
              <div className="gap-10 duration-500 relative group/card hover:shadow-2xl hover:shadow-emerald-700/[0.5] bg-black border-white/[0.2] w-full h-auto rounded-xl p-4 border">
                <div className="w-full">
                  <img
                    src={proj.picture}
                    className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </div>
                
                {/* Project Heading */}
                <div className="flex items-center justify-center">
                  <div className="mt-4 text-xl font-bold font-quicksand text-custom-green">
                    {proj.heading}
                  </div>
                </div>
                
                {/* Project Description */}
                <div className="flex items-center justify-center">
                  <p className="max-w-sm mt-2 text-white text-md font-cormorant">
                    {proj.description}
                  </p>
                </div>
                
                {/* Project Status */}
                <div className="flex items-center justify-center">
                  <div className="max-w-sm p-2 mt-1 text-sm text-black rounded-xl dark:text-neutral-300">
                    <span 
                      className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${proj.status === 'Completed' 
                          ? 'bg-green-900 text-green-400' 
                          : 'bg-yellow-900 text-yellow-400'}
                      `}
                    >
                      {proj.status}
                    </span>
                  </div>
                </div>
                
                {/* Tech Stack Icons */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  {proj.technologies.map((tech, index) => {
                    const IconComponent = techIcons[tech];
                    return IconComponent ? (
                      <div 
                        key={index} 
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300"
                        title={tech}
                      >
                        <IconComponent 
                          className="w-6 h-6 text-custom-deep-purple" 
                        />
                      </div>
                    ) : null;
                  })}
                </div>
                
                {/* Project Links */}
                <div className="flex items-center justify-between mt-4">
                  {proj.gitrepo && (
                    <button className="rounded-full flex h-10 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <a href={proj.gitrepo} target="_blank" rel="noopener noreferrer" className="text-sm">
                        Repo Link
                      </a>
                    </button>
                  )}
                  
                  {proj.livelink && (
                    <button className="rounded-full flex h-10 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <a href={proj.livelink} target="_blank" rel="noopener noreferrer" className="text-sm">
                        Live Link
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Projects;