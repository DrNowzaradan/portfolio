"use client";
import React from "react";
import "../../globals.css"


export const GridContainer = ({
  children
}) => {
  return (
    (<div
      className={'mt-10 grid-container text-white'} >
      { children }
    </div>)
  );
};

export const GridItem = ({
  title,
  desc
}) => {
  return (
    (<div className={'grid-item text-neutral-200'}>
        <div className='lilita-font text-3xl letter-space'>{ title }</div>
        <div className='mt-5 work-sans-font'>
            { desc }
        </div>
    </div>)
  );
};
