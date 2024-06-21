import { render, screen, act, fireEvent } from "@testing-library/react";
import App from "./App";
import * as useToken from "../hooks/useToken/useToken";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("token is present", () => {
    beforeEach(() => {
      jest.spyOn(useToken, "default").mockReturnValue({ token: "something" });
      render(<App />);
    });

    test("can render the protected route", async () => {
      expect(screen.getByText("Protected")).toBeTruthy();
      await userEvent.click(screen.getByText("Protected"));
      expect(
        screen.getByText("You are logged in so you can see this page"),
      ).toBeTruthy();
      await userEvent.click(screen.getByText("React Skeleton")); // make sure it doesnt end up on protected at end of test
    });
  });

  test("renders MeetAndiIdy Text", () => {
    render(<App />);
    expect(screen.getByText("MeetAndTidy")).toBeInTheDocument();
  });

  test("should handle the logout message", () => {
    jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
    render(<App />);
    dispatchEvent(
      new CustomEvent("token-change-message", { detail: { this: "thing" } }),
    );
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      "logout-message",
      '{"this":"thing"}',
    );
  });

  test("should ignore invalid logout messages", () => {
    jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
    render(<App />);
    dispatchEvent(new CustomEvent("token-change-message", { no: "detail" }));
    expect(Storage.prototype.setItem).not.toHaveBeenCalled();
  });

  test("should handle a token storageEvent", () => {
    jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
    render(<App />);
    act(() => {
      fireEvent(
        window,
        new StorageEvent("storage", {
          key: "token",
          storageArea: localStorage,
          newValue: "someToken",
        }),
      );
    });
    expect(Storage.prototype.setItem).toHaveBeenCalledWith(
      "token",
      "someToken",
    );
  });

  test("should ignore storage events for unchecked things", () => {
    jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
    render(<App />);
    act(() => {
      fireEvent(
        window,
        new StorageEvent("storage", {
          key: "someOtherKey",
          storageArea: localStorage,
          newValue: "someOtherValue",
        }),
      );
    });
    expect(Storage.prototype.setItem).not.toHaveBeenCalled();
  });
});
