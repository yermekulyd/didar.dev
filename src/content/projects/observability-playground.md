---
title: Observability Playground
eyebrow: Experiment
summary: Небольшой стенд для изучения логов, health checks и поведения сервисов в production.
status: Idea
technologies: Python, FastAPI, Docker, Prometheus (later)
featured: false
---

## Идея

Небольшой набор сервисов, на котором можно безопасно ломать приложение и наблюдать, что происходит с ним изнутри.

## Что хочу проверить

- Какие ошибки стоит логировать.
- Чем readiness check отличается от обычного health check.
- Как собирать базовые метрики.
- Что нужно знать о сервисе перед его деплоем.
