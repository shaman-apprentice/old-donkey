import { render, act } from "@testing-library/react"

import App from "./App"

describe("App", () => {
  const mockedFetchResponse = {
    text: "ever",
    color: "green",
  }
  let mockedFetch; 

  beforeEach(() => {
    mockedFetch = Promise.resolve({
      json: () => mockedFetchResponse,
    });
    jest.spyOn(window, "fetch").mockImplementation(() => mockedFetch); 
  });

  test("it doesn't know initially", async () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("I don't know");

    await act(() => mockedFetch);
  });

  test("it fetches once", async () => {
    render(<App />);

    expect(window.fetch).toHaveBeenCalledTimes(1);

    await act(() => mockedFetch);
  });

  test("it updates after fetch is resolved", async () => {
    const { container } = render(<App />);

    await(act(() => mockedFetch));

    expect(container).toHaveTextContent(mockedFetchResponse.text);
    expect(container.querySelector("span")).toHaveStyle({
      color: mockedFetchResponse.color
    })
  });

  test("correct image is displayed", async () => {
    const { container, } = render(<App />);
    await(act(() => mockedFetch));

    const image = container.querySelector("img");
    expect(image).toHaveAttribute("src", "developer-with-coffee.png");
  });

  test("image has by law required 'alt' attribute", async () => {
    const { container, } = render(<App />);
    await(act(() => mockedFetch));

    const image = container.querySelector("img");
    expect(image).toHaveAttribute("alt");
  })
});
