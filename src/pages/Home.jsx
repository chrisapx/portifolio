import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { useSearchParams } from "react-router-dom";
import { SiGooglemeet } from "react-icons/si";
import { ArrowUpRight01Icon, GithubIcon, Linkedin01Icon, Linkedin02Icon } from "hugeicons-react";
import { projects } from "../utilities/data";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleContact = () => {
    searchParams.set("_panelOpen", true);
    searchParams.set("_panelOperation", 'Contact');
    setSearchParams(searchParams);
  }

  const projects_ = [
    { 
      name: 'Family Investment Fund', 
      type: 'FINANCE', 
      banner: '/images/fiflogo.webp', 
      description: 'Treasury System for accounts management and loan processing and tracking' 
    },
    { name: 'Sacco Ops Hub', type: 'FINANCE', banner: '/images/fiflogo.webp', description: 'Finacial Sacco management | Treasury System for accounts management and loan processing and tracking' },
    { name: 'Nalmart | E-Marketplace', type: 'E-COMMERCE', banner: '/images/nalmart.png', description: 'This is a project description' },
    { name: 'Nalmart Vendor Hub', type: 'CRM & OPS', banner: '/images/nalmart.png', description: 'This is a project description' },
    { name: 'IDM FoodHub', type: 'DELIVERY SERVICES', banner: '/images/idmfoodhub.png', description: 'Fresh and Fast foods delivery services' },
    { name: 'IDM VedorHub', type: 'CRM & OPS', banner: '/images/idmvendorhub.png', description: 'This is a project description' },
    { name: 'ODD-Model V1', type: 'AI/MACHINE LEARNING', banner: '/images/banner.png', description: 'Orange Disease Detection Model' },
    { name: 'Image Generator | GAN', type: 'AI/MACHINE LEARNING', banner: '/images/banner.png', description: 'This is a project description' },
    { name: 'Suave Music PR', type: 'PUBLIC RELATIONS', banner: '/images/suavemusicpr.png', description: 'This is a project description' },
    { name: 'Remolders', type: 'E-LEARNING', banner: '/images/remolders.jpeg', description: 'This is a project description' },
    { name: 'Nzuri Marketplace', type: 'DELIVERY SERVICES | MOBILE APP', banner: '/images/remolders.jpeg', description: 'Ffresh food delivery application' },
  ]

  return (
    <div className="h-screen relative flex flex-col bg-opacity-90">
      <section className="flex items-center justify-between gap-4 py-2 bg-orange-50 w-full px-[8vw]">
        <p></p>
        <p className="font-medium text-xs">Let's break that problem together</p>
        <section className="flex items-center gap-2">
          <Linkedin02Icon size={18} className="text-blue-700"/>
          <GithubIcon size={18}/>
        </section>
      </section>

      <nav className="w-full flex items-center sticky top-0 justify-between px-[8vw] py-2 bg-gray-50 border-b shadow">
        <section>
          <img src="/favicons/apple-touch-icon.png" alt="" className="w-12 h-12 rounded-full border" />
        </section>
        <section className="flex gap-8 items-center">
          <div className="font-semibold hidden md:block">Contact</div>
          <a download href="/files/Christopher Mwesigwa's Resume.pdf" className="flex items-center gap-2 font-semibold border rounded-lg border-black px-4 py-2 text-sm md:text-md"><i className="pi pi-cloud-download"/> Resume</a>
        </section>
      </nav>

      <section className="h-full overflow-y-auto W-[90VW] ">
        <section className="flex flex-col items-center justify-center text-center m-4 h-[74vh] md:h-[67vh] rounded">
          <p className="text-[1.2rem] md:text-[4rem] font-bold text-center">Christopher Mwesigwa</p>
          <p className="text-[1.2rem] font-bold text-gray-500">Software Engineer | 3.5+ years</p>
          <button className="flex items-center gap-2 mt-6 px-8 py-2 font-semibold border border-black rounded-lg">Work <i className="pi pi-angle-double-down"/></button>
        </section>

        <section className="mb-20 px-4 md:px-16">
          <h1 className="opacity-50 text-[1.3rem] my-2">Projects</h1>
          <section className="grid gap-x-2 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
            { projects?.map((project, idx) => (
              <div className="border border-opacity-10 hover:shadow-xl cursor-pointer rounded-lg flex flex-col justify-between">
                <div className="px-4 py-2 ">
                  <p className="text-orange-800 font-bold opacity-50 text-xs flex justify-between items-center">{ project?.type} <span className="text-blue-500 opacity-90"><ArrowUpRight01Icon size={16}/></span></p>
                  <p className="text-lg ">{ project?.name}</p>
                  <p className="text-sm mt-2">{ project?.description}</p>
                </div>
                <div className="h-36 bg-orange-50">
                  <img src={project?.banner} alt={project?.name} className="object-cover h-[100%] w-[100%] rounded-b-lg" />
                </div>
              </div>
            ))}
          </section>

        </section>
      </section>


      <button 
        disabled
        className="absolute bottom-0 w-full shadow text-gray-700 font-semibold bg-gray-200 text-center py-3 cursor-not-allowed"
        title="Schedule a call with Christopher to discuss what we can be able to do together"
        >
        <div className="flex gap-4 items-center justify-center">
          <div className="text-lg text-blue-600"><SiGooglemeet/></div>
          <p>Schedule a call</p>
        </div>
      </button>

      <Sidebar 
        visible={searchParams.get('_panelOpen') === 'true'} 
        onHide={() => {
          searchParams.set("_panelOpen",  false );
          setSearchParams(searchParams)
        }} 
        position="right" 
        className="w-full md:w-[33vw] p-0"
        content={({ hide }) => (
          <div className="p-5 h-[100vh] overflow-y-auto">
            <p>{searchParams.get('_panelOperation')}</p>
            
          </div>
        )}
      />
    </div>
  );
};

export default Home;