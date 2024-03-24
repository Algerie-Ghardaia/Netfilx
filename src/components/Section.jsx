import data from "/data.json";
import "../App.css";

export default function Section() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((element) => {
          const picture = element.images;
          return (
            <>
              <div className="title">{element.category}</div>
              <div style={{ display: "flex", overflow: "scroll" }} className="list">
                {picture.map((image, index) => {
                  return (
                    <div key={index}>
                      <div className="movies-list">
                        <img alt="" src={image} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
