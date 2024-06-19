import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

test("renders Meet and Tidy Text", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(screen.getByText("Meet&Tidy")).toBeInTheDocument();
});
