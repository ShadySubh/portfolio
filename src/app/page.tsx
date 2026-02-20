import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ContactForm } from "@/components/contact-form";
import { SpotifyPlayer } from "@/components/spotify-player";

const people = [
  {
    id: 1,
    name: "prepeasy.ai",
    designation: "Education",
    image: "/images/web_dev_projects/AnimatedTooltip_people/1.png",
  },
  {
    id: 2,
    name: "Know Your Cooking Oil",
    designation: "Non_profit",
    image: "/images/web_dev_projects/AnimatedTooltip_people/2.png",
  },
  {
    id: 3,
    name: "MTR Construction & Iputs",
    designation: "Construction",
    image: "/images/web_dev_projects/AnimatedTooltip_people/3.png",
  },
  {
    id: 4,
    name: "Techi Club",
    designation: "Agro-Tech",
    image: "/images/web_dev_projects/AnimatedTooltip_people/4.png",
  },
  {
    id: 5,
    name: "Agritech Corporate",
    designation: "Agro-Tech",
    image: "/images/web_dev_projects/AnimatedTooltip_people/5.png",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-20 font-mono flex flex-col items-center relative overflow-hidden bg-[#0a0a0a]">

      {/* Brutalist Terminal Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0 pointer-events-none" />

      <div className="max-w-2xl w-full flex flex-col gap-16 sm:gap-20 pb-24 relative z-10">

        {/* Hero Section */}
        <section className="flex flex-col items-start gap-6 mt-12 sm:mt-24">
          <div className="space-y-6">
            {/* Top Row: Profile Image & Spotify Player */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 mb-8">
              {/* Terminal Profile Image */}
              <div className="relative isolate w-fit group">
                {/* Corner brackets */}
                <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-500/40 group-hover:border-emerald-500 transition-colors z-10" />
                <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-500/40 group-hover:border-emerald-500 transition-colors z-10" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-500/40 group-hover:border-emerald-500 transition-colors z-10" />
                <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-500/40 group-hover:border-emerald-500 transition-colors z-10" />

                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-900 border border-neutral-800 p-1 relative overflow-hidden group-hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
                  {/* Vintage terminal green overlay */}
                  <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                  {/* Scanline pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 pointer-events-none opacity-50 group-hover:opacity-20 transition-opacity duration-500" />

                  {/* Scanning laser beam on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,1)] -translate-y-[20px] group-hover:translate-y-[120px] transition-transform duration-[2s] ease-in-out z-30 pointer-events-none" />

                  <img
                    src="/images/web_dev_projects/Pfp2.svg"
                    alt="Shibu Profile"
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Active dev badge */}
                <div className="absolute -right-[110px] bottom-1 font-mono text-[10px] text-neutral-500 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 tracking-widest">SYS.ONLINE</span>
                  </div>
                  <span className="tracking-widest opacity-60">USR: ROOT</span>
                </div>
              </div>

              <SpotifyPlayer className="mt-0 w-full sm:w-auto" />

            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
                <span className="text-emerald-500 opacity-80">{">"}</span>
                Shibu
                <span className="w-3 sm:w-4 h-8 sm:h-10 bg-white/80 animate-pulse"></span>
              </h1>
              <div className="flex items-center gap-3 ml-[34px] sm:ml-[42px] font-mono">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest bg-[#111] border border-neutral-800 px-2.5 py-1.5 flex items-center gap-2 shadow-inner">
                  <span className="text-emerald-500 opacity-70">usr_id:</span> SUBHASISH_DAS
                </span>
                <span className="text-[10px] text-neutral-600 bg-[#0a0a0a] border border-neutral-800 px-2 py-1.5 uppercase tracking-widest">
                  Auth: Ok
                </span>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-mono w-full">
              <span className="text-neutral-500 mr-2">root@developer:~#</span>
              <span className="text-sky-400 bg-sky-500/10 border border-sky-500/20 px-1.5 py-0.5 rounded-none">Web Developer</span> crafting minimal, intentional digital experiences.
            </p>

            <div className="flex flex-col gap-3 pt-4">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Trusted by Founders and Entrepreneurs from all over the world</span>
              <div className="flex flex-row items-center justify-start w-full pl-2">
                <AnimatedTooltip items={people} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4 w-full">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center font-mono font-medium text-sm tracking-wide overflow-hidden rounded-none h-14 px-8 bg-[#111] border border-neutral-800 hover:border-emerald-500/30 transition-all duration-500 shadow-xl hover:shadow-emerald-500/10 w-full sm:w-auto cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <span className="text-neutral-400 group-hover:text-white transition-colors flex items-center gap-3 relative z-10">
                  <span className="text-emerald-500">~</span>
                  <span className="text-sky-400">./</span>init_contact.sh
                  <span className="w-1.5 h-4 bg-emerald-500/80 animate-blink opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </span>

                {/* Sleek Theme Gradient Border Bottom */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>

              <div className="flex gap-4 w-full sm:w-auto flex-1 sm:flex-none">


                <a
                  href="#web-dev"
                  className="group relative inline-flex items-center justify-center font-mono text-sm tracking-wide overflow-hidden rounded-none h-14 px-6 bg-[#111]/50 border border-neutral-800 hover:border-sky-500/30 hover:bg-[#111] transition-all duration-300 flex-1 sm:flex-none cursor-pointer"
                >
                  <span className="text-neutral-500 group-hover:text-sky-400 transition-colors flex items-center gap-2">
                    <span className="opacity-40 group-hover:opacity-100">{">"}</span> web_dev
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-neutral-500 mt-2 border-t border-neutral-900 pt-4 w-full">
            <span>Available for freelance</span>
            <span className="text-neutral-800">/</span>
            <span>Based in India</span>
          </div>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-12 w-full">
          <h2 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
            Skills & Tools
          </h2>

          <div className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-none overflow-hidden shadow-2xl relative group pb-4">
            {/* Terminal Header */}
            <div className="bg-[#111] px-4 py-3 flex items-center justify-between border-b border-neutral-800/50 relative z-10 transition-colors group-hover:bg-[#151515]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-none bg-rose-500/80 border border-black/10"></div>
                <div className="w-3 h-3 rounded-none bg-amber-500/80 border border-black/10"></div>
                <div className="w-3 h-3 rounded-none bg-emerald-500/80 border border-black/10"></div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 text-[10px] text-neutral-500/80 font-mono tracking-wider flex gap-2 items-center">
                <span>bash</span>
                <span className="opacity-50">—</span>
                <span>80x24</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-8 font-mono space-y-12">
              <div className="text-sm flex flex-wrap items-center gap-2 font-medium tracking-tight">
                <span className="text-emerald-500">root@developer:</span>
                <span className="text-sky-400">~/skills</span>
                <span className="text-neutral-500 font-light">$</span>
                <span className="text-neutral-200">ls -la --color=auto</span>
                <span className="w-1.5 h-4 bg-neutral-400/80"></span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-4">
                <div>
                  <h3 className="text-white mb-5 font-bold opacity-80 pl-3 border-l border-emerald-500 text-[11px] uppercase tracking-widest leading-none">Design/</h3>
                  <ul className="text-neutral-500 text-sm flex flex-col gap-3">
                    <li className="hover:text-emerald-400 transition-colors cursor-crosshair">./Photoshop</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-crosshair">./Illustrator</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-crosshair">./Figma</li>
                    <li className="hover:text-emerald-400 transition-colors cursor-crosshair">./Typography</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white mb-5 font-bold opacity-80 pl-3 border-l border-sky-500 text-[11px] uppercase tracking-widest leading-none">Development/</h3>
                  <ul className="text-neutral-500 text-sm flex flex-col gap-3">
                    <li className="hover:text-sky-400 transition-colors cursor-crosshair">./React_Next.js</li>
                    <li className="hover:text-sky-400 transition-colors cursor-crosshair">./TailwindCSS</li>
                    <li className="hover:text-sky-400 transition-colors cursor-crosshair">./TypeScript</li>
                    <li className="hover:text-sky-400 transition-colors cursor-crosshair">./Framer_Motion</li>
                  </ul>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-white mb-5 font-bold opacity-80 pl-3 border-l border-purple-500 text-[11px] uppercase tracking-widest leading-none">Workflow/</h3>
                  <ul className="text-neutral-500 text-sm flex flex-col gap-3">
                    <li className="hover:text-purple-400 transition-colors cursor-crosshair">./AI_Agents</li>
                    <li className="hover:text-purple-400 transition-colors cursor-crosshair">./Shopify</li>
                    <li className="hover:text-purple-400 transition-colors cursor-crosshair">./WordPress</li>
                    <li className="hover:text-purple-400 transition-colors cursor-crosshair">./Git</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-none" />
          </div>
        </section>



        {/* Web Dev Projects */}
        <section id="web-dev" className="flex flex-col gap-6 w-full pt-12">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-none bg-sky-500/50"></span>
              Web Dev Projects
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent"></div>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { id: 1, title: "Collab Heaven", url: "https://shadysubh-ch.netlify.app/", desc: "Modern agency website with interactive UI, smooth animations, and a premium dark design system.", year: "2025" },
              { id: 2, title: "Know Your Cooking Oil", url: "https://knowyourcookingoil.netlify.app/", desc: "High-performance Next.js application structured with scalable React architecture.", year: "2024" }
            ].map((project) => (
              <div key={project.id} className="group relative w-full flex flex-col sm:flex-row gap-6 p-6 bg-[#0a0a0a] border border-neutral-800 border-l-2 border-l-neutral-800 hover:border-l-sky-500 hover:bg-[#111] transition-all duration-300 rounded-none">
                <div className="w-full sm:w-1/3 aspect-[16/9] sm:aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-none overflow-hidden relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={`/images/web_dev_projects/${project.id}.jpg`}
                    className="w-full h-full object-cover"
                    alt={`${project.title}`}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-white font-mono text-lg flex items-center gap-2">
                        <span className="text-sky-500 text-sm opacity-50 group-hover:opacity-100">{">"}</span> {project.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-600 bg-neutral-900 px-2 py-1 rounded-none border border-neutral-800">{project.year}</span>
                    </div>
                    <p className="text-neutral-400 text-sm font-mono leading-relaxed max-w-sm">
                      {project.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded-none border border-sky-500/20">Next.js</span>
                      <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded-none border border-neutral-700">Tailwind</span>
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-neutral-400 hover:text-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer">
                      [ View_Source ]
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Contact */}
        <section id="contact" className="flex flex-col gap-12 w-full mb-12">
          <h2 className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
            Contact
          </h2>

          <div className="flex flex-col gap-6">
            <p className="text-neutral-400 text-lg w-full">
              Currently open to new opportunities and collaborations. Let's build something intentional.
            </p>
            <a
              href="mailto:shadysubh@gmail.com"
              className="group w-fit flex flex-col font-mono cursor-pointer mt-2"
            >
              <span className="text-xs text-neutral-600 uppercase tracking-widest flex items-center gap-2 mb-1">
                <span className="text-emerald-500">{">"}</span> SET_TARGET_ADDRESS
              </span>
              <div className="text-xl sm:text-2xl text-neutral-300 group-hover:text-white transition-colors flex items-center gap-3 bg-[#111] border border-neutral-800 px-6 py-4 rounded-none hover:border-emerald-500/30 shadow-inner">
                <span className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors">mailto:</span>
                shadysubh@gmail.com
                <span className="w-2.5 sm:w-3 h-6 sm:h-7 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            </a>

            <ContactForm />


            <div className="flex gap-8 mt-8 text-sm text-neutral-500">
              <a href="#" className="hover:text-white transition-colors hover:underline decoration-neutral-700 underline-offset-4">Twitter / X</a>
              <a href="#" className="hover:text-white transition-colors hover:underline decoration-neutral-700 underline-offset-4">Instagram</a>
              <a href="#" className="hover:text-white transition-colors hover:underline decoration-neutral-700 underline-offset-4">GitHub</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full pb-8 pt-4 border-t border-neutral-900 flex flex-col items-center justify-center gap-2 font-mono text-xs text-neutral-500">
          <p>Design &amp; Developed by Shibu</p>
          <p>&copy; 2026. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
