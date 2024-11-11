import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  // Select the task element that contains "Buy rice"
  const task = screen.queryByText(/Buy rice/);
  expect(task).toBeInTheDocument();  // Ensure it's found before continuing

  // Select the delete button within the task element
  const deleteButton = task.closest(".task").querySelector("button");

  // Trigger the delete button click
  fireEvent.click(deleteButton);

  // Verify "Buy rice" is removed from the DOM
  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});