/* eslint-disable react/prop-types */


const Skill = ({name,level,bg}) => {
  return (
    
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-300">{name}</h3>
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-400">{level}%</span>
            </div>
            <div className="flex">
              <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${bg} h-2.5 rounded-full`}
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
  
}

export default Skill