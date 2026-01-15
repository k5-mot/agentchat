import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import Page from "../app/page";

describe("Page", () => {
  afterEach(() => {
    cleanup();
  });

  test("Next.jsロゴが表示される", () => {
    render(<Page />);
    expect(screen.getByAltText("Next.js logo")).toBeDefined();
  });

  test("Deploy nowリンクが表示される", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: /Deploy now/i })).toBeDefined();
  });

  test("Read our docsリンクが表示される", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: /Read our docs/i })).toBeDefined();
  });

  test("フッターにLearn、Examples、Go to nextjs.orgリンクがある", () => {
    render(<Page />);
    expect(screen.getByRole("link", { name: /Learn/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /Examples/i })).toBeDefined();
    expect(
      screen.getByRole("link", { name: /Go to nextjs.org/i }),
    ).toBeDefined();
  });
});
