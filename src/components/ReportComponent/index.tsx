import React from "react";

interface Step {
  id: number;
  title: string;
  status: "pending" | "in-progress" | "done";
}

export interface TestReportComponentProps {
  id: number;
  name: string;
  steps: Step[];
}

export default function TestReportComponent({
  id,
  name,
  steps,
}: TestReportComponentProps) {
  return (
    <div>
      <h1 data-testid="test-report-testid">Report #{id}</h1>
      <div data-testid="test-report-username">
        <label>Patient Name</label>
        <div>{name}</div>
      </div>
      <ul data-testid="test-report-steps">
        {steps.map((step) => (
          <li key={step.id}>
            {step.status === "pending" && "🕒"}
            {step.status === "in-progress" && "⏳"}
            {step.status === "done" && "✅"}
            {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
