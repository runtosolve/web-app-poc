import { useState } from "react";
import { Icon } from "../Atoms/Icon";

export enum DirectionEnum {
  GRAVITY = 1,
  UPLIFT = 2
}

export enum CrossSectionEnum {
  Z = 1,
  C = 2
}

export default function LoadAndDirectionForm() {

  const [direction, setDirection] = useState<DirectionEnum>(1)
  const [crossSection, setCrossSection] = useState<CrossSectionEnum>(1)
  const [roofSlope, setRoofSlope] = useState<string>("6")

  return (
    <>

      {/* GRAVITY AND UPLIFT */}
      <div className="input-section">
        <div className="svg-label flex">
          <Icon iconName="horizontalArrows" />
          <p>Load Direction</p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className={`${direction === DirectionEnum.GRAVITY && 'active'} input-boolean gravity`} onClick={() => setDirection(DirectionEnum.GRAVITY)}>
              <Icon iconName="arrowSquare" />
            </div>
            <p>Gravity</p>
          </div>
          <div className="flex flex-col">
            <div className={`${direction === DirectionEnum.UPLIFT && 'active'} input-boolean `} onClick={() => setDirection(DirectionEnum.UPLIFT)}>
              <Icon iconName="arrowSquare" />
            </div>
            <p>Uplift</p>
          </div>
        </div>
      </div>

      {/* ROOF SLOPE */}
      <div className="input-section">
        <div className="svg-label flex">
          <Icon iconName="slope" />
          <p>Roof Slope</p>

        </div>
        <div className="flex flex-col">
          <label className="flex justify-between">
            <span>0</span>
            <span>6/12</span>
          </label>
          <input type="range" id="points" name="points" min="0" max="360" onChange={(vl) => setRoofSlope(vl.target.value)}></input>
          <h4>{roofSlope}</h4>
        </div>
      </div>

      {/* CROSS SECTION */}
      <div className="input-section">
        <div className="svg-label flex">
          <Icon iconName="cross" />
          <p>Cross Section</p>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className={`${crossSection === CrossSectionEnum.C && 'active'} input-boolean`} onClick={() => setCrossSection(CrossSectionEnum.C)}>
              <Icon iconName="ccross" />
            </div>
            <p>C</p>
          </div>
          <div className="flex flex-col">
            <div className={`${crossSection === CrossSectionEnum.Z && 'active'} input-boolean `} onClick={() => setCrossSection(CrossSectionEnum.Z)}>
              <Icon iconName="zcross" />
            </div>
            <p>Z</p>
          </div>
        </div>
      </div>
    </>
  );
}
