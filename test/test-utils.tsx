import React, { ReactChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, RenderOptions } from '@testing-library/react-native';

// type RenderOptions = Parameters<typeof render>[1];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

const AllTheProviders = ({ children }: { children: ReactChildren }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const customRender = <T extends {}>(
  component: React.ReactElement<T>,
  options?: RenderOptions,
) => render(component, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
