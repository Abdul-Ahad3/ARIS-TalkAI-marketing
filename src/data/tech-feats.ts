import type { simpleFeatureGroup } from "@/types/feature";

export const techFeatures: simpleFeatureGroup[] = [
    {
        eyebrow: "Edge · Embedded Edition",
        label: "Runs entirely on the device",
        description: "No internet required. The whole pipeline is quantised to run on a compact edge‑AI module, so nothing leaves the device.",
        features: [
            {
                eyebrow: "01 · Detect",
                title: "Silero VAD",
                description: "Detects when a complete spoken phrase has finished, then automatically triggers the rest of the speech pipeline.",
            },
            {
                eyebrow: "02 · Transcribe",
                title: "Faster-Whisper",
                description: "Converts speech to text using CTranslate2, with INT8 inference on CPUs or FP16 acceleration on supported NPUs.",
            },
            {
                eyebrow: "03 · Translate",
                title: "Argos Translate · OpenNMT",
                description: "Performs fully offline neural machine translation between supported languages using OpenNMT models.",
            },
            {
                eyebrow: "04 · Speak",
                title: "Piper TTS",
                description: "Generates natural-sounding neural speech directly on the device for fast, private text-to-speech synthesis.",
            },
        ]
    },
    {
        eyebrow: "Cloud · TalkAI App",
        label: "Powers the app, with a connection",
        description: "Broader language support and the highest quality, streamed live during a call and returned in one to two and a half seconds.",
        features: [
           {
                eyebrow: "01 · Capture",
                title: "Live audio stream",
                description: "Streams voice securely from the phone, providing low-latency audio input for real-time processing.",
            },
            {
                eyebrow: "02 · Transcribe",
                title: "ElevenLabs Scribe v2",
                description: "Delivers fast, highly accurate real-time speech-to-text transcription with strong multilingual support.",
            },
            {
                eyebrow: "03 · Translate",
                title: "GPT-4o-mini",
                description: "Produces context-aware translations across many languages while preserving meaning, tone, and intent.",
            },
            {
                eyebrow: "04 · Speak",
                title: "Native device voice",
                description: "Uses the phone's built-in text-to-speech engine for instant, natural voice playback with minimal latency.",
            },
        ]
    },
]