import { GlossaryItem } from "@/types/tech-glossary";

export const glossaryItems: GlossaryItem[] = [
  {
    term: "ONNX",
    summary: "The format that lets one AI model run efficiently on many devices.",
    detail: "ONNX (Open Neural Network Exchange) is an open standard for AI models. Using it means the same interpretation model can run efficiently on the Embedded Edition's chip and in cloud servers, without being rebuilt from scratch for each one.",
  },
  {
    term: "Latency",
    summary: "The gap between speaking and being understood — kept as close to zero as possible.",
    detail: "Natural conversation depends on speed. ARIS is engineered so interpretation keeps pace with speech, whether it's processed on-device or over a network connection, so conversation flows the way it normally would.",
  },
  {
    term: "Privacy",
    summary: "Your conversation is yours — by design, not by policy.",
    detail: "Embedded Edition never sends audio anywhere; everything happens on the device itself. The TalkAI App encrypts data in transit and only processes what's needed to complete the call.",
  },
  {
    term: "Scalability",
    summary: "Built the same way for one person or an entire organization.",
    detail: "The same architecture that powers a single device also supports enterprise-wide deployments — consistent performance whether it's one unit in a clinic or hundreds across a company.",
  },
];