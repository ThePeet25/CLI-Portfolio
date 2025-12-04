"use client";

import { useState, useEffect, useRef } from "react";
import { text } from "stream/consumers";

// เพิ่ม props ตรงนี้
type TerminalProps = {
  onExecuteCommand: (cmd: string) => void;
};

const help_text = `Available Commands:
-------------------
/introduce   : Show profile
/skills      : View technical skills
/projects    : show my projects
/contact     : Get contact info
/certificate : View certificates
/github      : Open GitHub profile
/resume      : Open resume file
/help        : Show this help message
cls, clear   : Clear terminal history
`;

export default function Terminal({ onExecuteCommand }: TerminalProps) {
  // รับ props เข้ามา
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { id: number; text: string; isUser?: boolean }[]
  >([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input
  useEffect(() => inputRef.current?.focus(), []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!input.trim()) return;

      const command = input.trim();

      const userLine = {
        id: Date.now(),
        text: `> ${command}`,
        isUser: true,
      };

      if (command === "/help") {
        const responseLine = {
          id: Date.now() + 1,
          text: help_text,
          isUser: false,
        };

        setHistory((prev) => [...prev, userLine, responseLine]);
      } else if (command === "cls" || command === "clear") {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          { id: Date.now(), text: `user> ${command}` },
        ]);

        //ส่งคำสั่งไปให้ Parent (Page) จัดการต่อ
        onExecuteCommand(command);
      }

      setInput("");
    }
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto p-4 bg-[#0d1117] min-h-[300px] rounded-lg border border-gray-700 shadow-xl font-mono text-sm md:text-base cursor-text max-h-[500px] overflow-scroll box-border"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header ของ CLI Box */}
      <div className="text-center text-gray-500 mb-4 font-bold border-b border-gray-800 pb-2">
        cmd
      </div>

      <div className="space-y-1">
        <div className="text-gray-400">Welcome to CLI Portfolio</div>
        <div className="text-gray-400">
          Type <span className="text-yellow-400">/help</span> to open panels.
        </div>

        {/* History */}
        {history.map((line) => (
          <div key={line.id} className="text-gray-300 break-words">
            {line.isUser ? (
              <span className="text-green-400">{line.text}</span>
            ) : (
              <span className="text-gray-400 whitespace-pre-wrap mt-1 mb-3">
                {line.text}
              </span>
            )}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-green-400">
          <span className="mr-2">user &gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-green-400 focus:ring-0"
            autoFocus
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
