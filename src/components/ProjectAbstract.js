import React from "react";

const ProjectAbstract = (params) => {
  return (
    <>
    <div className="flex flex-col justify-evenly border rounded-md px-2 py-1 my-2 h-[200px]">
      <h1 className="text-2xl font-bold mb-3">{params.title}</h1>
      <p className="text-gray-400 mb-1">
        {params.desc}
      </p>
      <div className="flex gap-5 text-lg">
        {params.liveURL && <a href={params.liveURL}>Live site</a>}
        <a href={params.githubURL} className="flex gap-1 items-center"><img src="../icons/github-30.png" />Code</a>
      </div>
    </div>
    </>
  );
};

export default ProjectAbstract;
