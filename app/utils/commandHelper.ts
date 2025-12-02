// app/utils/commandHelper.ts

type CommandResponse = {
  type: "text" | "link" | "error";
  value: string;
};

// เสมือน Database เก็บคำตอบ
const DATA: Record<string, CommandResponse> = {
  "/introduce": {
    type: "text",
    value: "Hi! I'm a Computer Engineering Student passionate about Backend.",
  },
  "/github": {
    type: "link",
    value: "https://github.com/yourusername",
  },
  "/skills": {
    type: "text",
    value: "Languages: Go, JavaScript, Python\nTools: Docker, Git, SQL",
  },
  "/certificate": {
    type: "text",
    value: "i love popa",
  },
};

export const processCommand = (cmd: string): CommandResponse => {
  const cleanCmd = cmd.trim().toLowerCase();

  if (DATA[cleanCmd]) {
    return DATA[cleanCmd];
  }

  return {
    type: "error",
    value: `Command not found: ${cleanCmd}. Try /introduce`,
  };
};
