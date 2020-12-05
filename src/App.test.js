import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("boton que hace aparecer texto", () => {
  const { getByText, getByRole } = render(<App />);
  const button = getByRole("button", { name: /action/i });
  userEvent.click(button);
  expect(getByText("Learn to test")).toBeVisible();
});

test("imagen visible", () => {
  const { getByRole } = render(<App />);
  const img = getByRole("img", { name: /logo/i });
  expect(img).toBeVisible();
});
