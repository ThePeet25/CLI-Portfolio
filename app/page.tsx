"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Terminal from "./components/Terminal";
import GuiBox from "./components/GuiBox";

type ActiveBox = {
  id: number;
  type: "introduce" | "project" | "contact" | "certificate" | "skills";
  title: string;
};

export default function Home() {
  const [activeBoxes, setActiveBoxes] = useState<ActiveBox[]>([]);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.toLowerCase().replace("/", "");

    //Mapping commands to type
    let targetType: ActiveBox["type"] | null = null;

    switch (cleanCmd) {
      case "introduce":
        targetType = "introduce";
        break;
      case "project":
        targetType = "project";
        break;
      case "contact":
        targetType = "contact";
        break;
      case "certificate":
        targetType = "certificate";
        break;
      case "skills":
        targetType = "skills";
        break;
      default:
        targetType = null;
    }

    if (targetType) {
      const existingBox = activeBoxes.find((box) => box.type === targetType);

      if (existingBox) {
        const element = document.getElementById(`box-${targetType}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });

          element.classList.add("ring-2", "ring-green-400");
          setTimeout(
            () => element.classList.remove("ring-2", "ring-green-400"),
            1000
          );
        }
      } else {
        const newBox: ActiveBox = {
          id: Date.now(),
          type: targetType,
          title: targetType,
        };
        setActiveBoxes((prev) => [...prev, newBox]);
      }
    }
  };

  // const handleCommand = (cmd: string) => {
  //   const cleanCmd = cmd.toLowerCase().replace("/", ""); // ตัด / ออก

  //   let newBox: ActiveBox | null = null;

  //   // เช็คคำสั่ง
  //   if (cleanCmd === "introduce") {
  //     newBox = { id: Date.now(), type: "introduce", title: "introduce.md" };
  //   } else if (cleanCmd === "certificate") {
  //     newBox = {
  //       id: Date.now(),
  //       type: "certificate",
  //       title: "certificate.json",
  //     };
  //   }

  //   // ถ้ามีกล่องใหม่ ให้เพิ่มเข้า State
  //   if (newBox) {
  //     setActiveBoxes((prev) => [...prev, newBox!]);
  //   }
  // };

  const removeBox = (id: number) => {
    setActiveBoxes((prev) => prev.filter((box) => box.id !== id));
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#050505] p-8 pb-32">
      {/* จุดอ้างอิงสำหรับ Scroll to top */}
      <div ref={topRef} />

      {/* 1. ส่วน Terminal (อยู่บนสุดเสมอ) */}
      <div className="z-10 mt-4 mb-12">
        <Terminal onExecuteCommand={handleCommand} />
      </div>

      {/* 2. ส่วนพื้นที่แสดง GUI Boxes */}
      <div className="mt-8 space-y-8">
        {activeBoxes.map((box) => (
          <GuiBox
            key={box.id}
            id={box.id}
            title={box.title}
            type={box.type}
            onDelete={removeBox}
          />
        ))}
      </div>

      {/* 3. global floating */}
      {/* <div className="flex"> */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-20 bg-green-500 z-50 hover:bg-green-500 
            text-black font-bold font-mono py-3 px-4 rounded-full shadow-lg transition-all duration-300
            transform ${
              showScrollBtn
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 pointer-events-none"
            }`}
      >
        <ArrowUp size={16} />
      </button>
      {/* </div> */}

      {/* Placeholder */}
      {activeBoxes.length === 0 && (
        <div className="text-center text-gray-600 mt-20 font-mono text-sm">
          waiting for command...
        </div>
      )}
    </main>
  );
}
