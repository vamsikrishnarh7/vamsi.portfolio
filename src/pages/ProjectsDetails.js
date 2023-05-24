import React from "react";
import ProjectAbstract from "../components/ProjectAbstract";

const ProjectsDetails = () => {
  return (
    <div className="px-[5%] text-white">
      <h1 className="text-3xl underline my-5">Projects</h1>
      <ProjectAbstract
        title="SLOC"
        desc="A website for my college coding club where students can get information about ongoing and upcoming events ans access the resources"
        liveURL="https://sloc.vercel.app"
        githubURL="https://github.com/vamsikrishnarh7/sloc"
      />
      <ProjectAbstract
        title="PassMate"
        desc="A simple password saver where user can save and access their passwords"
        liveURL="https://passmate.vercel.app"
        githubURL="https://github.com/vamsikrishnarh7/passmate"
      />
      <ProjectAbstract
        title="Blog App"
        desc="A blog app where users write blogs"
        liveURL=""
        githubURL=""
      />
      <ProjectAbstract
        title="FinTech API"
        desc="An API that helps you to deal with your financial calculations to which I contributed"
        liveURL=""
        githubURL="https://github.com/Clueless-Community/fintech-api"
      />
    </div>
  );
};

export default ProjectsDetails;
