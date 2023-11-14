"use client"
import Image from 'next/image';
import React from 'react';
import couch from "@/assets/couch.svg";
import { useLoading, useOutput } from '@/store/useStore';


function PreviewImg() {
    const isLoading = useLoading((state: any) => state.isLoading);
    const isGenerating = useLoading((state: any) => state.isGenerating);
    const output = useOutput((state: any) => state.output);
    return isLoading ? (
      <div
        className={`${
          isGenerating && "animate-pulse"
        } md:w-[500px] w-[350px] h-[200px] my-auto md:h-[300px] bg-slate-500 rounded-lg flex items-center justify-center`}>
        <Image width={100} height={100} src={couch} alt="couch" />
      </div>
    ) : (
      <div className="my-auto">
        <img src={output} alt="output" className='rounded-lg object-cover'/>
      </div>
    );
}

export default PreviewImg;