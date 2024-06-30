'use client'
import { useCallback, useState } from "react";
import LoadAndDirectionForm from "../Molecules/direction.form";
import DeckTypeForm from "../Molecules/cross-section.form";
import SpansForm from "../Molecules/spans.form";
import { Icon } from "../Atoms/Icon";

const formSteps = [
  {
    icon: "direction",
    name: "Directions",
    description: "Directions",
  },
  {
    icon: "sections",
    name: "CrossSection",
    description: "CrossSection",
  },
  {
    icon: "layers",
    name: "Spans",
    description: "Spans",
  },
];
export default function FormCore() {
  const [currentForm, setCurrentForm] = useState(formSteps[0]);

  const renderCurrentForm = useCallback((formName: string) => {
    switch (formName) {
      case formSteps[0].name:
        return <LoadAndDirectionForm />;
      case formSteps[1].name:
        return <DeckTypeForm />;
      case formSteps[2].name:
        return <SpansForm />;
    }
  }, [currentForm]);

  return (
    <>
      <div className="flex flex-col">
        {formSteps.map((step) => (
          <div
            className={`btn-menu ${currentForm.name === step.name && "active"}`}
            onClick={() => setCurrentForm(step)}
            key={step.name}
          >
            <Icon iconName={step.icon} />
          </div>
        ))}
      </div>
      <div className="form-column">
        {renderCurrentForm(currentForm?.name)}
      </div>
    </>
  );
}
