# landing_final_v3

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Appraisily/landing_final_v3)

## TypeScript Export Guidelines

When working with components, use one of these export patterns to avoid the "Module does not provide an export named 'default'" error:

```typescript
// Option 1: Default export (Preferred)
const Component = () => {
  // Component code
};

export default Component;

// Option 2: Named export
export const Component = () => {
  // Component code
};

// Then import using:
import { Component } from './Component';
```

Avoid this pattern as it can cause export errors:
```typescript
// ❌ Wrong
const Component = () => {
  // Component code
};

export { Component };
```