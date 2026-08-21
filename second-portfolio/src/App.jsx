import React, { useState } from "react";
import { Menu, X, ArrowRight, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import mernaPhoto from "./assets/merna.jpg";

const SAGE = "#7C9885";
const SAGE_DEEP = "#4B5D53";
const SAND = "#F1ECE3";
const INK = "#2E3530";
const MAUVE = "#B49AA0";
const CARD = "#FFFFFF";

const fontDisplay = { fontFamily: "'Fraunces', serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };

const skills = [
  { name: "HTML & CSS", val: 92 },
  { name: "JavaScript", val: 80 },
  { name: "React JS", val: 85 },
  { name: "Node JS", val: 78 },
  { name: "Databases", val: 82 },
];

const services = [
  { title: "Frontend Development", desc: "Turning designs into pixel-perfect, high-performance web applications." },
  { title: "Backend Development", desc: "Powering data-driven applications with scalable backend solutions." },
  { title: "Project Deployment", desc: "Ensuring smooth application operations with robust maintenance." },
];

const work = [
  { cat: "E-commerce", title: "Booking Platform" },
  { cat: "Mobile", title: "Sign Up Flow" },
  { cat: "E-commerce", title: "PerfectChem Store" },
  { cat: "Web", title: "Contact Experience" },
  { cat: "Logistics", title: "Fleet Landing Page" },
  { cat: "Web App", title: "Order Tracking" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Work", "Contact"];
  return (
    <header style={{ background: "rgba(241,236,227,0.9)", backdropFilter: "blur(8px)" }} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <div style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-2xl font-semibold">
          Merna<span style={{ color: MAUVE }}>.</span>
        </div>
        <nav className="hidden md:flex gap-9" style={{ ...fontBody }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: INK }} className="text-sm opacity-70 hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <button className="md:hidden" style={{ color: INK }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-6 pb-6" style={{ ...fontBody, color: INK }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" style={{ background: SAND }} className="pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div style={{ ...fontBody, color: SAGE_DEEP, border: `1px solid ${SAGE}` }} className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: SAGE }} />
            Fullstack Developer
          </div>
          <h1 style={{ ...fontDisplay, color: SAGE_DEEP, lineHeight: 1.1 }} className="text-5xl md:text-6xl font-medium mb-6">
            Calm code,
            <br />
            <span style={{ fontStyle: "italic", color: MAUVE }}>thoughtful</span> builds
          </h1>
          <p style={{ ...fontBody, color: INK }} className="text-base leading-relaxed max-w-md mb-9 opacity-75">
            I'm Merna, a fullstack developer based in Alexandria, Egypt. Two years of building products that feel simple, even when they aren't.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" style={{ background: SAGE_DEEP, color: SAND, ...fontBody }} className="px-7 py-3.5 rounded-full text-sm flex items-center gap-2 hover:opacity-90">
              Connect With Me <ArrowRight size={15} />
            </a>
            <a href="#" style={{ border: `1px solid ${SAGE_DEEP}`, color: SAGE_DEEP, ...fontBody }} className="px-7 py-3.5 rounded-full text-sm hover:bg-white">
              My Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative" style={{ width: "420px", height: "420px" }}>
            <div
              style={{ width: "420px", height: "420px", borderRadius: "50%" }}
              className="flex items-center justify-center overflow-hidden"
            >
              <img src={mernaPhoto} alt="Merna" className="w-full h-full object-cover rounded-full" />
            </div>
            <div
              style={{ background: CARD, color: SAGE_DEEP, ...fontBody }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full text-xs shadow-md whitespace-nowrap"
            >
              Alexandria, Egypt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <span style={{ ...fontBody, color: MAUVE }} className="text-xs uppercase tracking-widest mb-3 block font-medium">About</span>
          <h2 style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-4xl font-medium mb-6">A little about me</h2>
          <p style={{ ...fontBody, color: INK }} className="leading-relaxed opacity-75 mb-4">
            I care about the parts of a product people don't notice when they work — the loading state, the empty screen, the error message that actually helps.
          </p>
          <p style={{ ...fontBody, color: INK }} className="leading-relaxed opacity-75 mb-10">
            Two years in, I've worked with teams like Buzz X, RTL, and PerfectChem, shipping products end to end.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[["2", "Years"], ["5+", "Projects"], ["5+", "Clients"]].map(([n, l]) => (
              <div key={l} style={{ background: SAND }} className="p-5 rounded-2xl text-center">
                <div style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-3xl font-medium">{n}</div>
                <div style={{ ...fontBody, color: INK }} className="text-[11px] uppercase tracking-widest mt-1 opacity-60">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div style={{ ...fontBody, color: INK }} className="flex justify-between text-sm mb-2">
                <span>{s.name}</span>
                <span className="opacity-50">{s.val}%</span>
              </div>
              <div style={{ background: SAND, height: "8px", borderRadius: "8px" }} className="w-full overflow-hidden">
                <div style={{ width: `${s.val}%`, background: SAGE, height: "100%", borderRadius: "8px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: SAND }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <span style={{ ...fontBody, color: MAUVE }} className="text-xs uppercase tracking-widest mb-3 block font-medium">Services</span>
        <h2 style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-4xl font-medium mb-14">What I can do for you</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} style={{ background: CARD }} className="p-9 rounded-3xl">
              <div style={{ background: `linear-gradient(135deg, ${SAGE}, ${MAUVE})`, width: "44px", height: "44px", borderRadius: "14px" }} className="mb-7" />
              <h3 style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-xl font-medium mb-3">{s.title}</h3>
              <p style={{ ...fontBody, color: INK }} className="text-sm opacity-70 leading-relaxed mb-6">{s.desc}</p>
              <a href="#" style={{ color: SAGE_DEEP, ...fontBody }} className="text-sm font-medium flex items-center gap-1">
                Read More <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const grads = [
    `linear-gradient(135deg, ${SAGE}, ${SAGE_DEEP})`,
    `linear-gradient(135deg, ${MAUVE}, ${SAGE_DEEP})`,
    `linear-gradient(135deg, ${SAGE_DEEP}, ${MAUVE})`,
    `linear-gradient(135deg, ${SAGE}, ${MAUVE})`,
    `linear-gradient(135deg, ${SAGE_DEEP}, ${SAGE})`,
    `linear-gradient(135deg, ${MAUVE}, ${SAGE})`,
  ];
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <span style={{ ...fontBody, color: MAUVE }} className="text-xs uppercase tracking-widest mb-3 block font-medium">Portfolio</span>
      <h2 style={{ ...fontDisplay, color: SAGE_DEEP }} className="text-4xl font-medium mb-14">My latest work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {work.map((w, i) => (
          <div
            key={w.title}
            style={{ background: grads[i], aspectRatio: "4/3", borderRadius: "24px" }}
            className="p-6 flex flex-col justify-end relative overflow-hidden cursor-pointer"
          >
            <ArrowUpRight className="absolute top-5 right-5" color={SAND} size={18} />
            <span style={{ ...fontBody, color: SAND }} className="text-[11px] uppercase tracking-widest mb-1 opacity-80">{w.cat}</span>
            <h4 style={{ ...fontDisplay, color: SAND }} className="text-xl font-medium">{w.title}</h4>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <a href="#" style={{ border: `1px solid ${SAGE_DEEP}`, color: SAGE_DEEP, ...fontBody }} className="px-7 py-3.5 rounded-full text-sm inline-block hover:bg-white">
          Show More
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: SAGE_DEEP }} className="py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <span style={{ ...fontBody, color: MAUVE }} className="text-xs uppercase tracking-widest mb-3 block font-medium">Contact</span>
          <h2 style={{ ...fontDisplay, color: SAND }} className="text-4xl font-medium mb-6">Let's talk</h2>
          <p style={{ ...fontBody, color: SAND }} className="opacity-70 leading-relaxed mb-9 max-w-sm">
            Currently available for new projects — send a message about anything you'd like help with.
          </p>
          <div className="flex flex-col gap-4" style={{ color: SAND, ...fontBody }}>
            <div className="flex items-center gap-3 text-sm opacity-90"><Mail size={16} /> mernaraoof94@gmail.com</div>
            <div className="flex items-center gap-3 text-sm opacity-90"><Phone size={16} /> +20 1289245996</div>
            <div className="flex items-center gap-3 text-sm opacity-90"><MapPin size={16} /> Alexandria, Egypt</div>
          </div>
        </div>
        <form style={{ background: SAND }} className="p-9 rounded-3xl flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label style={{ ...fontBody, color: SAGE_DEEP }} className="text-xs block mb-2 opacity-70">Your Name</label>
              <input style={{ background: CARD }} className="w-full px-4 py-3 rounded-xl text-sm outline-none" placeholder="Enter your name" />
            </div>
            <div>
              <label style={{ ...fontBody, color: SAGE_DEEP }} className="text-xs block mb-2 opacity-70">Your Email</label>
              <input style={{ background: CARD }} className="w-full px-4 py-3 rounded-xl text-sm outline-none" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <label style={{ ...fontBody, color: SAGE_DEEP }} className="text-xs block mb-2 opacity-70">Message</label>
            <textarea style={{ background: CARD, minHeight: "100px" }} className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none" placeholder="Write your message here" />
          </div>
          <button type="submit" style={{ background: SAGE_DEEP, color: SAND, ...fontBody }} className="self-start px-7 py-3.5 rounded-full text-sm hover:opacity-90">
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: SAGE_DEEP, borderTop: "1px solid rgba(241,236,227,0.15)" }} className="py-7">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs" style={{ color: SAND, ...fontBody, opacity: 0.6 }}>
        <span>&copy; 2026 Merna. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#contact">Connect</a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div style={{ background: SAND, minHeight: "100vh" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}