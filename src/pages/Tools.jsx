import { useState } from "react";
import ToolsButtons from "../components/ToolsButtons";
import ToolsList from "../components/ToolsList";



const Tools = () => {
  const [filter, setFilter] = useState(null);
  return (
    <div id="tools" className='bg-sky-50'>
      <div className='container mx-auto px-4 lg:px-2 max-w-6xl py-20'>
        <div>
          <h1
            className={`text-blue-500  md:text-left text-3xl lg:text-4xl xl:text-6xl font-semibold `}
          >
            Tools
          </h1>
        </div>
        <div className='mt-20'>
          <ToolsButtons setFilter={setFilter} filter={filter} />
        </div>
        <div className='mt-16'>
          <ToolsList filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Tools;
