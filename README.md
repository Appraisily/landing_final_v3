# landing_final_v3

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Appraisily/landing_final_v3)

## Component Export Guidelines

When creating React components, always use one of these export patterns to avoid the "Module does not provide an export named 'default'" error:

```typescript
// Option 1: Default export (Preferred)
function Component() {
  return <div>Component content</div>;
}

export default Component;

// Option 2: Named export with default
export const Component = () => {
  return <div>Component content</div>;
};

export default Component;

// Option 3: Named export (requires named import)
export const Component = () => {
  return <div>Component content</div>;
};

// Then import using:
import { Component } from './Component';
```

❌ Avoid this pattern as it can cause export errors:
```typescript
// Wrong
const Component = () => {
  return <div>Component content</div>;
};

export { Component };
```

## Error Boundaries

Always wrap lazy-loaded components with error boundaries to handle potential loading errors:

```typescript
// ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Usage in App.tsx
import ErrorBoundary from './ErrorBoundary';

// Wrap lazy components
<ErrorBoundary>
  <Suspense fallback={<LoadingSpinner />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>
```

## Component Checklist

When creating or modifying components:

1. ✅ Use proper export syntax (default or named)
2. ✅ Wrap lazy-loaded components with error boundaries
3. ✅ Include proper TypeScript types
4. ✅ Handle loading states with Suspense
5. ✅ Implement proper error handling
6. ✅ Use semantic HTML elements
7. ✅ Follow accessibility guidelines
8. ✅ Optimize performance (useMemo, useCallback when needed)
9. ✅ Implement responsive design
10. ✅ Use consistent styling patterns

## Performance Optimization

- Use lazy loading for non-critical components
- Implement proper code splitting
- Optimize images using ImageKit.io
- Minimize bundle size
- Use proper caching strategies
- Implement proper loading states
- Handle errors gracefully