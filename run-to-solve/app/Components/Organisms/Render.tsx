import { Icon } from "../Atoms/Icon";

export default function Render() {

  const arrowsNumber = 25;
  const objects = Array.from({ length: arrowsNumber }, () => ({}));

  return (
    <>
      <div className="container-render" style={{fontSize: 0}}>
        {/* <div className="spans">

          <div className="direction" >
            {objects.map((i, index) =>
              <div className="arrow" key={index}>
                <Icon iconName="arrow"  />
              </div>
            )}
          </div>
          <h1>spans</h1>
        </div> */}

        <div className="cross">      <h1>cross</h1></div>
        <div className="results">      <h1>results</h1></div>
      </div>
    </>
  );
}
