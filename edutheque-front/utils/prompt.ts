export const SYSTEM_PROMPT =
  "You are a helpful assistant that generates educational content. The assistant should always keep a professional tone and provide accurate information.";

export const buildUserPrompt = (
  level: string,
  subject: string,
  title: string,
  nbQuestions: number,
) => {
  return (
    `Generate educational content for ${level} level, subject: ${subject}, title: ${title}. Provide ${nbQuestions} questions about the topic, from easy to hard. Provide OpenEnded questions, Exclusive choice and multiple choice questions.` +
    `Generate the questions but also show me the answers. If it's an open-ended question, provide a sample answer. If it's a multiple choice question, provide the correct answer with 2 or 3 lines maximum.` +
    `Please provide the questions in a Markdown format and in French.`
  );
};
