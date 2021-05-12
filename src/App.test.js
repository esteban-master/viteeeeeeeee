import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("render heading con el h1", () => {
  const { getByText } = render(<App />);
  const saludo = getByText(/Hola Esteban/i);
  // console.log("elemento: ", linkElement.innerHTML);
  expect(saludo).toBeInTheDocument();
});
