# Brainstorm TypeScript

## Stack
* `React`
* `TypeScript`
* `Redux Toolkit RTK Query`
* `Styled components`

## How to run
    Create .env file
    pnpm install
    pnpm start

## Folder structure
    src
        ├── app
        │   ├── hooks
        │   └── ...
        ├── assets
        │   ├── icons
        │   └── ...
        ├── common
        │   ├── components
        │   │   ├── {component}
        │   │   │   ├── index.tsx
        │   │   │   ├── styled.ts
        │   │   │   └── ...
        │   │   └── ...
        │   ├── hooks
        │   │   ├── use-{hook}.ts
        │   │   └── ...
        │   ├── utils
        │   │   ├── index.ts
        │   │   └── ...
        │   └── ...
        ├── config
        │   └── ...
        ├── features
        │   ├── {feature}
        │   │   ├── components
        │   │   │   ├── {component}
        │   │   │   │   ├── index.tsx
        │   │   │   │   ├── styled.ts
        │   │   │   │   └── ...
        │   │   │   └── ...
        │   │   ├── hooks
        │   │   │   ├── use-{hook}.ts
        │   │   │   └── ...  
        │   │   ├── utils
        │   │   │   ├── index.ts
        │   │   │   └── ...  
        │   │   ├── {feature}Types.ts
        │   │   ├── {feature}API.ts
        │   │   ├── {feature}Endpoints.ts
        │   │   ├── {feature}Slice.ts
        │   │   └── ...  
        │   └── ...  
        ├── i18n
        │   └── ...
        ├── layout
        │   ├── {component}
        │   │   ├── index.tsx
        │   │   ├── styled.ts
        │   │   └── ...
        │   └── ...
        ├── routes
        │   └── ...
        ├── style
        │   ├── scss  
        │   │   ├── {name}.scss 
        │   │   └── ... 
        │   ├── theme
        │   │   ├── {name}.js 
        │   │   └── ...
        │   └── ...
        ├── types
        │   └── ...
        └── ...

## Code example

```tsx
import { FC, useCallback } from "react";

type ComponentNameProps = {};

const ComponentName: FC<ComponentNameProps> = () => {
    const handleChnage = useCallback(() => {}, []);

    return <tag onChange={handleChnage}>content</tag>;
};

export default ComponentName
```

## Styled components example

```ts
import styled from "styled-components";

export const StyledComponentName = styled.div`
    width: 100px;
    height: 100px;
  
    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-size: ${(p) => p.theme.typography.fontSize.p16};
    font-weight: ${(p) => p.theme.typography.weight.normal};
    
    background-color: ${(p) => p.theme.palette.accent};
    color: ${({ theme }) => theme.palette.white};
    padding: 10px;
`;
```