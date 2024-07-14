import { OpenAI } from "openai";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates educational content.",
        },
        {
          role: "user",
          content: `Generate educational content for ${body.level} level, subject: ${body.subject}, title: ${body.title}. Provide ${body.nbQuestions} questions about the topic, from easy to hard. Provide OpenEnded questions, Exclusive choice and multiple choice questions. Answer in French and in a Markdown format.`,
        },
      ],
    });

    return {
      content: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Error generating content",
    });
  }
});
