import { Card } from "@/types/card";

export const embeddedFeatures: Card[] = [
  {
    eyebrow: "Detect",
    title: "Seliro VAD",
    description: "Hears when a full phrase has been spoken and starts the pipeline.",
  },
  {
    eyebrow: "Transcribe",
    title: "Faster-Whisper",
    description: "Speech to text, quantised for the device (INT8 on CPU, FP16 on NPU).",
  },
  {
    eyebrow: "Translate",
    title: "Argos · OpenNMT",
    description: "Offline machine translation between the two languages.",
  },
  {
    eyebrow: "Speak",
    title: "Piper TTS",
    description: "Natural, neural voice, generated on the device itself.",
  },
];