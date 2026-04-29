'use server';
/**
 * @fileOverview An AI agent that generates compelling narratives and summary bullet points for project case studies.
 *
 * - generateCaseStudyNarrative - A function that handles the case study narrative generation process.
 * - GenerateCaseStudyNarrativeInput - The input type for the generateCaseStudyNarrative function.
 * - GenerateCaseStudyNarrativeOutput - The return type for the generateCaseStudyNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCaseStudyNarrativeInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project case study.'),
  clientName: z.string().optional().describe('The name of the client for whom the project was done.'),
  projectGoals: z.string().describe('A detailed description of the project goals.'),
  methodologies: z.string().describe('A description of the methodologies and strategies used.'),
  keyPerformanceIndicators: z
    .string()
    .describe('The Key Performance Indicators (KPIs) relevant to the project.'),
  achievedResults: z
    .string()
    .describe('The achieved results and outcomes of the project, including numerical data.'),
  targetAudience: z.string().optional().describe('The target audience for the case study narrative.'),
  uniqueSellingPoints: z
    .string()
    .optional()
    .describe('Any unique aspects or selling points of the project.'),
});
export type GenerateCaseStudyNarrativeInput = z.infer<
  typeof GenerateCaseStudyNarrativeInputSchema
>;

const GenerateCaseStudyNarrativeOutputSchema = z.object({
  narrative: z.string().describe('A compelling, engaging narrative for the case study.'),
  summaryBulletPoints: z
    .array(z.string())
    .describe('A list of concise summary bullet points highlighting key achievements and results.'),
});
export type GenerateCaseStudyNarrativeOutput = z.infer<
  typeof GenerateCaseStudyNarrativeOutputSchema
>;

export async function generateCaseStudyNarrative(
  input: GenerateCaseStudyNarrativeInput
): Promise<GenerateCaseStudyNarrativeOutput> {
  return generateCaseStudyNarrativeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCaseStudyNarrativePrompt',
  input: {schema: GenerateCaseStudyNarrateInputSchema},
  output: {schema: GenerateCaseStudyNarrativeOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating compelling project case studies. Your goal is to transform raw project data into an engaging narrative and a set of concise, impactful summary bullet points.

Craft a narrative that highlights the journey, challenges, solutions, and ultimate success of the project. Emphasize the value delivered and the impact on the client or business. Follow this with a list of key achievements as bullet points.

Project Title: {{{projectTitle}}}
{{#if clientName}}Client Name: {{{clientName}}}{{/if}}
Project Goals: {{{projectGoals}}}
Methodologies Used: {{{methodologies}}}
Key Performance Indicators: {{{keyPerformanceIndicators}}}
Achieved Results: {{{achievedResults}}}
{{#if targetAudience}}Target Audience for Narrative: {{{targetAudience}}}{{/if}}
{{#if uniqueSellingPoints}}Unique Aspects: {{{uniqueSellingPoints}}}{{/if}}

Generate the narrative and summary bullet points in a professional and persuasive tone. Focus on clarity, impact, and measurable outcomes.`,
});

const generateCaseStudyNarrativeFlow = ai.defineFlow(
  {
    name: 'generateCaseStudyNarrativeFlow',
    inputSchema: GenerateCaseStudyNarrativeInputSchema,
    outputSchema: GenerateCaseStudyNarrativeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
