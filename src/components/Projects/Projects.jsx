import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import projects from "../utils/projects";

const Projects = () => {
  return (
    <>
    <div className="mx-auto text-center sm:mt-0 mt-32">
    <h2 className="text-4xl font-bold uppercase text-custom-teal font-quicksand">Projects</h2>
    </div>
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <CardContainer key={proj.id} className="gap-6 p-4 ">
            <CardBody className=" gap-10 duration-500 relative group/card hover:shadow-2xl hover:shadow-emerald-700/[0.5] bg-black border-white/[0.2]  w-full h-auto rounded-xl p-4 border">
              <CardItem translateZ="100" className="w-full">
                <img
                  src={proj.picture}
                  className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex items-center justify-center">
                <CardItem
                  translateZ="60"
                  className="mt-4 text-xl font-bold font-quicksand text-custom-green"
                >
                  {proj.heading}
                </CardItem>
              </div>
              <div className="flex items-center justify-center">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="max-w-sm mt-2 text-white text-md font-cormorant"
                >
                  {proj.description}
                </CardItem>
              </div>
              <div className="flex items-center justify-center">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="max-w-sm p-2 mt-1 text-sm text-black rounded-xl bg-custom-orange dark:text-neutral-300"
                >
                  {proj.status}
                </CardItem>
              </div>
              <div className="flex items-center justify-between mt-4">
                {proj.gitrepo ? ( <button className=" rounded-full flex h-10 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
                  <a href={proj.gitrepo} target="__blank"
                  className="text-sm"
                  >
                    Repo Link
                  </a>
                </button>) : null}
               
                {proj.livelink ? ( <button className=" rounded-full flex h-10 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
                  <a href={proj.livelink} target="__blank"
                  className="text-sm "
                  >
                    Live Link
                  </a>
                </button>) : null}
               
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};

export default Projects;
