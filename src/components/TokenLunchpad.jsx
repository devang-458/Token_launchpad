import React from "react";

export const TokenLaunchpad = () => {
  return (
    <div className="flex flex-col justify-center p-4 text-center rounded-lg bg-slate-600">
      <div className="mb-4">
        <h1 className="mt-6 font-mono text-4xl font-bold">Solana Token Launchpad</h1>
        <div className="w-full h-0.5 bg-white "></div>
      </div>
      <input placeholder="Name" className="p-2 m-2 font-mono text-lg font-bold text-black rounded-lg "/>
      <input placeholder="Image Url " className="p-2 m-2 font-mono text-lg font-bold text-black rounded-lg "/>
      <input placeholder="Symbol" className="p-2 m-2 font-mono text-lg font-bold text-black rounded-lg "/>
      <input placeholder="Initial Supply" className="p-2 m-2 font-mono text-lg font-bold text-black rounded-lg "/>
      <button className="p-2 m-2 font-mono text-xl font-bold text-white bg-gray-700 border-2 rounded-lg hover:text-black" onClick={()=>{
        
      }}>Create Token</button>
    </div>
  );
};
