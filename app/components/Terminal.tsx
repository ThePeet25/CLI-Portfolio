"use client";

import { on } from "events";
import { useState, useEffect, useRef } from "react";
import { text } from "stream/consumers";

// เพิ่ม props ตรงนี้
type TerminalProps = {
  onExecuteCommand: (cmd: string) => void;
};

type CommandHandle = (args: { setHistory: any; onExecuteCommand: any }) => void;

const help_text = `Available Commands:
-------------------
/introduce   : Show profile
/skills      : View technical skills
/projects    : Show my projects
/contact     : Get contact info
/certificate : View certificates
/github      : Open GitHub profile
/resume      : Open resume file
/help        : Show this help message
cls, clear   : Clear terminal history
`;

const Command_registry: Record<string, CommandHandle> = {
  "/help": ({ setHistory }) => {
    setHistory((prev: any) => [
      ...prev,
      { id: Date.now() + 1, text: help_text, isUser: false },
    ]);
  },

  clear: ({ setHistory }) => setHistory([]),
  cls: ({ setHistory }) => setHistory([]),

  // external links
  "/github": () => window.open("https://github.com/ThePeet25", "_blank"),
  "/resume": () => window.open("/resume.pdf", "_blank"),

  //GUI
  "/introduce": ({ onExecuteCommand }) => onExecuteCommand("/introduce"),
  "/projects": ({ onExecuteCommand }) => onExecuteCommand("/projects"),
  "/contact": ({ onExecuteCommand }) => onExecuteCommand("/contact"),
  "/certificate": ({ onExecuteCommand }) => onExecuteCommand("/certificate"),
  "/skills": ({ onExecuteCommand }) => onExecuteCommand("/skills"),
};

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

      //1. collect user history
      const userLine = {
        id: Date.now(),
        text: `> ${command}`,
        isUser: true,
      };
      setHistory((prev) => [...prev, userLine]);

      //2. handle command
      const action = Command_registry[command];

      if (action) {
        action({ setHistory, onExecuteCommand });
      } else {
        const errorLine = {
          id: Date.now() + 1,
          text: `Command not found: ${command}. Type /help for available commands.`,
          isUser: false,
        };
        setHistory((prev) => [...prev, errorLine]);
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
          <div key={line.id} className="text-gray-300 wrap-break-word">
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
