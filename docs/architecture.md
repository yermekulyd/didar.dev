# Frontend Architecture

## Goal

This project uses evolutionary, feature-first architecture: the structure should help the app grow safely without forcing abstractions before they are needed.

Main constraints:

- Keep feature work isolated by default.
- Prefer small, explicit modules over generic layers.
- Let repeated product needs create abstractions, not guesses.
- Optimize for readable code, easy changes, and low coupling.

## Principles

### Evolutionary Design

Architecture should evolve with the product. Start with the smallest clear structure, then extract shared pieces only when at least two real use cases need them.

Good extraction signals:

- The same behavior appears in multiple features.
- A feature boundary becomes hard to understand.
- A module has more than one reason to change.
- Tests or UI states are hard to write because responsibilities are mixed.

Weak extraction signals:

- A folder name sounds clean.
- A helper might be useful later.
- A component is large but still has one clear responsibility.

### SOLID in React

- Single Responsibility: components render UI, hooks coordinate behavior, pure functions transform data.
- Open/Closed: extend behavior through composition, props, and small variants before editing shared modules for one-off needs.
- Liskov Substitution: components with the same public contract should be replaceable without hidden assumptions.
- Interface Segregation: keep props and hook return values narrow; do not pass large objects when a component needs two fields.
- Dependency Inversion: feature UI should depend on feature-level APIs or hooks, not on low-level implementation details.

### KISS, DRY, YAGNI

- Keep the first version simple and direct.
- Do not duplicate domain logic.
- Do not abstract incidental duplication too early.
- Add dependencies only when they clearly reduce project complexity.

## Source Layout

Recommended structure as the app grows:

```txt
src/
  app/
    layout.tsx
    page.tsx
    ...
  features/
    feature-name/
      api/
      model/
      ui/
      lib/
      types.ts
      index.ts
  entities/
    entity-name/
      model/
      ui/
      lib/
      types.ts
      index.ts
  shared/
    api/
    config/
    lib/
    types/
    ui/
```

Current rule: create folders when the first real module needs them. Avoid empty architecture scaffolding.

## Layer Responsibilities

### `src/app`

Next.js App Router entry points:

- routes, layouts, metadata, loading and error boundaries;
- route-level composition;
- provider wiring when it is truly global.

Keep business logic out of `app`. Route files should mostly assemble features and page-level UI.

### `src/features`

User-facing product capabilities. A feature owns its UI, state, validation, data loading, and commands when they are specific to that capability.

Examples:

- `features/contact-form`
- `features/project-gallery`
- `features/theme-switcher`

Feature internals should be private by default. Export only the public surface from `index.ts`.

### `src/entities`

Reusable domain concepts shared by multiple features.

Examples:

- `entities/project`
- `entities/profile`
- `entities/article`

Use `entities` only when the same domain model or UI appears across features. If only one feature uses it, keep it inside that feature.

### `src/shared`

Reusable project primitives with no product-specific ownership.

Examples:

- `shared/ui/button`
- `shared/lib/format-date`
- `shared/config/env`
- `shared/api/http-client`

Shared modules must stay boring, stable, and broadly useful.

## Dependency Rules

Allowed direction:

```txt
app -> features -> entities -> shared
app -> entities -> shared
app -> shared
```

Rules:

- `shared` must not import from `entities`, `features`, or `app`.
- `entities` must not import from `features` or `app`.
- `features` must not import from other features directly.
- If two features need the same logic, move it to `entities` or `shared`.
- Outside a feature or entity, import through its `index.ts` public API.

## Next.js Boundaries

- Prefer Server Components by default.
- Add `"use client"` only for interactivity, browser APIs, local state, or client-only hooks.
- Never expose secrets to client components.
- Keep data access close to the feature that owns the use case.
- Use route handlers or server actions for mutations when the behavior belongs on the server.

## Component Guidelines

- Keep components focused on one job.
- Split when a child component has a meaningful name and reason to exist.
- Prefer composition over configuration-heavy components.
- Put feature-specific components under `features/*/ui`.
- Put generic visual primitives under `shared/ui` only after reuse is real.

## State Guidelines

- Keep state as local as possible.
- Use URL state for shareable navigation and filters.
- Use server data as server data; avoid duplicating it into client state without a reason.
- Introduce global state only for truly global concerns.

## Testing Guidelines

Test according to risk:

- Pure domain logic: unit tests.
- Feature workflows: component or integration tests.
- Critical routes: end-to-end tests.
- Styling-only changes: visual or manual verification can be enough.

Each new feature should have at least one clear verification path, even if it starts as a manual checklist.

## New Feature Checklist

Before adding a feature:

- What user capability does it represent?
- Can it live entirely in `src/features/<name>`?
- Does it need a shared entity, or is that premature?
- What is its public API from `index.ts`?
- Which parts must be server-only or client-only?
- What is the smallest useful test or verification path?

After adding a feature:

- No direct imports from another feature.
- No secrets in client code.
- No shared abstraction created for only one caller unless it greatly simplifies the code.
- Route files remain mostly composition.
