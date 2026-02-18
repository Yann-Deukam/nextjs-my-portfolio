// src/constants/generateQuestions.ts
import { portfolioData } from "./portfolioData";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export function generateQuestions(): Question[] {
  const questions: Question[] = [];

  questions.push({
    id: 1,
    question: `What is ${portfolioData.name}'s main role?`,
    options: [
      "UI Designer",
      portfolioData.role,
      "DevOps Engineer",
      "Data Scientist",
    ],
    correctAnswer: portfolioData.role,
  });

  questions.push({
    id: 2,
    question: `How many years of experience does ${portfolioData.name} have?`,
    options: ["1", "2", "3", "5"],
    correctAnswer: portfolioData.experienceYears.toString(),
  });

  questions.push({
    id: 3,
    question: `Which frontend framework does ${portfolioData.name} use most?`,
    options: ["Angular", portfolioData.techStack.frontend[0], "Vue", "Svelte"],
    correctAnswer: portfolioData.techStack.frontend[0],
  });

  questions.push({
    id: 4,
    question: `What is his favorite project?`,
    options: [
      "Blog Platform",
      "Portfolio Website",
      portfolioData.favoriteProject,
      "Weather App",
    ],
    correctAnswer: portfolioData.favoriteProject,
  });

  questions.push({
    id: 5,
    question: `Which database does he use?`,
    options: [
      "Firebase",
      portfolioData.techStack.database[0],
      "SQLite",
      "Redis",
    ],
    correctAnswer: portfolioData.techStack.database[0],
  });

  return questions;
}
