import { vi } from "vitest";

// next/image のモック
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    priority: _priority,
    ...props
  }: {
    src: string;
    alt: string;
    priority?: boolean;
    [key: string]: unknown;
  }) => {
    return <img src={src} alt={alt} {...props} />;
  },
}));
