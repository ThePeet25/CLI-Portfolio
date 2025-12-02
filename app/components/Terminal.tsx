"use client";

import { useState, useEffect, useRef } from "react";

// เพิ่ม props ตรงนี้
type TerminalProps = {
  onExecuteCommand: (cmd: string) => void;
};

export default function Terminal({ onExecuteCommand }: TerminalProps) {
  // รับ props เข้ามา
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ id: number; text: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input
  useEffect(() => inputRef.current?.focus(), []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!input.trim()) return;

      const command = input.trim();

      // 1. เพิ่ม History ว่าเราพิมพ์อะไรไป
      setHistory((prev) => [
        ...prev,
        { id: Date.now(), text: `visitor@portfolio:~$ ${command}` },
      ]);

      // 2. ส่งคำสั่งไปให้ Parent (Page) จัดการต่อ
      onExecuteCommand(command);

      setInput("");
    }
  };

  return (
    <div
      className="w-full max-w-4xl mx-auto p-4 bg-[#0d1117] min-h-[300px] rounded-lg border border-gray-700 shadow-xl font-mono text-sm md:text-base cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header ของ CLI Box */}
      <div className="text-center text-gray-500 mb-4 font-bold border-b border-gray-800 pb-2">
        cmd.exe
      </div>

      <div className="space-y-1">
        <div className="text-gray-400">
          Welcome to Interactive Portfolio v2.0
        </div>
        <div className="text-gray-400">
          Type <span className="text-yellow-400">/introduce</span> or{" "}
          <span className="text-yellow-400">/skills</span> to open panels.
        </div>

        {/* History */}
        {history.map((line) => (
          <div key={line.id} className="text-gray-300 break-words">
            {line.text}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-green-400">
          <span className="mr-2">visitor@portfolio:~$</span>
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
