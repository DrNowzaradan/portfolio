"use client";
import { useState } from 'react';
import { Menu, PageTab, SmallMenu, ToggleButton, PanelTab } from './components/ui/navbar';
import { Compare } from './components/ui/compare';
import { FlipWords } from './components/ui/flipWords';
import { ContainerScroll } from './components/ui/ContainerScroll';
import { BackgroundGradientAnimation as BgGradient} from './components/ui/bgGradient'
import { GridContainer, GridItem } from './components/ui/gridArea';
import { PinContainer } from './components/ui/3d-pin';
import { ProjectCard } from "./components/ui/ProjectCard"
import { Tabs as tabs } from './utils/tabs';
import { AboutList as abouts} from './utils/abouts'
import { ProjectList as projects } from './utils/projectList';
import "./fonts.css";






export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].title);
  const [isActive, setSidePanel] = useState(false);
  const words = ['Developer', 'Designer']

  return (
      <div className='relative' >
        
        {/* Üst Menü */}
        <Menu>
          <div className='flex justify-start gap-2'>
              { tabs.map((item) => (
                <PageTab key={item.title} currTab={selectedTab} togglePanel={setSidePanel} setCurrTab={setSelectedTab} title={item.title} href={item.href}></PageTab>
              ))}
          </div>
          <div className='flex justify-end gap-7 items-center'>
            <a className="text-white hover:text-neutral-300 cursor-pointer" href="https://linkedin.com/in/enes-altan-19554a177" target="_blank"><ion-icon name='logo-linkedin'></ion-icon></a>
            <a className="text-white hover:text-neutral-300 cursor-pointer" href="https://github.com/DrNowzaradan" target="_blank"><ion-icon name='logo-github'></ion-icon></a>
          </div>
        </Menu>
        <ToggleButton isActive={isActive} togglePanel={setSidePanel}></ToggleButton>
        <SmallMenu isActive={isActive}>
            <button onClick={() => setSidePanel(false)} className='text-white ml-auto mt-5 mb-10'><ion-icon size='large' name='close-outline'></ion-icon></button>
            <div className='flex flex-col gap-2'>
                  { tabs.map((item) => (
                    <PanelTab key={item.title + 'panel'} currTab={selectedTab} togglePanel={setSidePanel} setCurrTab={setSelectedTab} title={item.title} href={item.href}></PanelTab>
                  ))}
              </div>
              <div className='flex justify-center gap-7 items-center mt-10'>
                <a className="text-white hover:text-neutral-300 cursor-pointer" href="https://linkedin.com/in/enes-altan-19554a177" target="_blank"><ion-icon name='logo-linkedin'></ion-icon></a>
                <a className="text-white hover:text-neutral-300 cursor-pointer" href="https://github.com/DrNowzaradan" target="_blank"><ion-icon name='logo-github'></ion-icon></a>
            </div>
        </SmallMenu>
        {/* Hero Section */}
        <div className="flex flex-col overflow-hidden" id='home'>
            <ContainerScroll titleComponent={
                <h1 className="text-3xl md:text-[3.75rem] text-white lilita-font">
                I am a <br />
                <span className="text-6xl md:text-[8rem] mt-1 leading-none lilita-font ">
                <FlipWords words={words}></FlipWords>
                </span>
              </h1>
            }>
              <Compare
                  firstImage="code.jpeg"
                  secondImage="/blockchain.png"
                  firstImageClassName="mx-auto rounded-2xl  object-left-top"
                  secondImageClassname="mx-auto rounded-2xl aspect-video object-left-top"
                  className="w-full h-full"
                  slideMode="hover"
              />
            </ContainerScroll>
        </div>
        
        {/* About Me Section */}
        <div className="container mx-auto text-left mt-20 px-5" id='about'>
          <div className="lilita-font text-left text-[3.5rem] text-white mb-10">About Me</div>
          <div className="work-sans-font text-lg text-white">Hello, I am Enes Altan, a full-stack developer and UI/UX designer. Experienced in building modern, stylish websites and crafting intuitive UI/UX designs.</div>
          <GridContainer>
            { abouts.map(about => (
              <GridItem key={about.title} title={about.title} desc={about.desc}></GridItem>
            ))}
          </GridContainer>
        </div>
        <div className="container mx-auto text-left md:mt-80 mt-20  px-5" id='projects'>
      <div className="lilita-font text-left text-[3.5rem] text-white">Some of My Recent Works</div>
      <div className="mt-10 work-sans-font text-lg text-white">
        If you want to see more, you can check out my github profile.
        <div className='mt-5 '>
          <a href="https://github.com/DrNowzaradan" target="_blank" className="text-black hover:bg-[rgba(255,255,255,0.9)]  bg-[rgba(255,255,255,0.8)] px-10 py-3 rounded-2xl transition-colors w-fit flex justify-center items-center "><ion-icon name='logo-github'></ion-icon></a>
        </div>
      </div>
      <div className="flex md:justify-start justify-center items-start flex-wrap gap-10 mt-10">
          { projects.map(project => (
            <PinContainer
              key={project.title}
              title={project.link}
              href={project.link}
            >
              <ProjectCard key={project.title} title={project.title} desc={project.desc} src={project.src}></ProjectCard>
            </PinContainer>
          ))}
      </div>
      </div>
        {/* Footer Section */}
    <footer className='container mx-auto md:mt-80 mt-20 text-white h-80 px-10 py-10 flex md:flex-row flex-col justify-evenly bg-[rgba(0,0,0,0.3)] rounded-ss-3xl rounded-se-3xl border border-[rgba(255,255,255,0.2)]'>
      <div className='work-sans-font text-lg md:order-1 order-2 md:mt-0 mt-10'>&copy; 2024 Enes Altan &middot; Flexit</div>
      <div className='work-sans-font md:order-2 order-1'>
        <div className='lilita-font text-2xl letter-space'>My Links</div>
        <div className='mt-5'>
          <a href="https://github.com/DrNowzaradan" target="_blank" className='text-neutral-200 hover:text-white'>Github</a>
        </div>
        <div className='mt-3'>
          <a href="https://linkedin.com/in/enes-altan-19554a177" target="_blank" className='text-neutral-200 hover:text-white'>Linkedin</a>
        </div>
        <div className='mt-3'>
          <a href="/CV.pdf" target="_blank" className='text-neutral-200 hover:text-white'>CV</a>
        </div>
        <div className='mt-3'>
          <a href="https://linkedin.com/in/enes-altan-19554a177" target="_blank" className='text-neutral-200 hover:text-white'>We'd like to hire you</a>
        </div>
      </div>
    </footer>
    {/* Bg Gradient Component */}
        <BgGradient interactive={false} className={"z-0"}></BgGradient>
      </div>
  );
}