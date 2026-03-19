# trusted-claw

A minimal gateway-hosted assistant runtime.

> **Note:** This repository is scaffolding only. Business logic is not yet implemented.

## Overview

`trusted-claw` provides:
- HTTP + WebSocket gateway (`/v1/chat`, `/v1/responses`, `/health`, `/ready`)
- Provider abstraction (OpenAI and future providers)
- Local skill registry with built-in skills (echo, time_now, calculator)
- File-based session and transcript persistence
- Config loading from `trusted-claw.json5` with env-secret support

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

## Run

```bash
# Production (after build)
npm start

# Development (ts-node)
npm run dev
```

## Configuration

Copy or edit `trusted-claw.json5` to configure the gateway port, provider settings, and storage paths.
Set secrets via environment variables (e.g. `TC_OPENAI_API_KEY`).
