import { render } from "@testing-library/svelte";
import App from "./App.svelte";

// FIXME: add more unit tests
it("shows a loading indicator", () => {
  const { getByText } = render(App);

  expect(getByText("Just a second...")).toBeDefined();
});
