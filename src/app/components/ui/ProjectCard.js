"use client";
import React from "react";
import "../../globals.css"

export const ProjectCard = ({
    title,
    desc,
    src
}) => {
    return (
        <div className="border bg-[rgba(0,0,0,0.3)] border-[rgba(255,255,255,0.2)] p-7 w-80 h-80 rounded-3xl backdrop-blur-md flex flex-col">
          <div className="lilita-font font-medium text-2xl text-left text-white letter-space">
              {title}
          </div>
          <div className="work-sans-font text-neutral-200 text-left mt-3">
              {desc}
          </div>
          <div className="mt-auto">
              <img className="rounded-xl" src={src} alt={title}></img>
          </div>
        </div>
    );
};

