import { getAllByRole, render, within } from "@testing-library/react";
import React from "react";

import ReportComponent, { TestReportComponentProps } from "..";

// Tip: Using TypeScript interfaces will provide component props validation out of the box
const noStepsProps: TestReportComponentProps = {
  id: 1,
  name: "harsh",
  steps: [],
};

const basicProps: TestReportComponentProps = {
  id: 1,
  name: "harsh",
  steps: [
    {
      id: 1,
      status: "done",
      title: "Tissue Sample Collection",
    },
    {
      id: 2,
      status: "in-progress",
      title: "Spectrum Analysis",
    },
    {
      id: 3,
      status: "pending",
      title: "Report Verification",
    },
  ],
};

test("renders correct title", () => {
  const { getByTestId } = render(<ReportComponent {...noStepsProps} />);
  within(getByTestId("test-report-testid")).getByText("Report #1");
});

// Shortcut for simple text search
test("Simple Test Search", () => {
  const { getByText } = render(<ReportComponent {...noStepsProps} />);
  getByText("Report #1");
});

test("renders correct name", () => {
  const { getByTestId } = render(<ReportComponent {...noStepsProps} />);
  within(getByTestId("test-report-username")).getByText("harsh");
});

test("renders correct steps", () => {
  const { getByTestId } = render(<ReportComponent {...basicProps} />);
  const steps = getAllByRole(getByTestId("test-report-steps"), "listitem");
  expect(steps[0].textContent).toBe("✅Tissue Sample Collection");
  expect(steps[1].textContent).toBe("⏳Spectrum Analysis");
  expect(steps[2].textContent).toBe("🕒Report Verification");
});
