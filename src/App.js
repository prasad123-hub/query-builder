import { useState } from "react";
import { QueryBuilderComponent } from "@syncfusion/ej2-react-querybuilder";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { books } from "./data-source.js";
import { DataManager, Query } from "@syncfusion/ej2-data";

const App = () => {
  const [result, setResult] = useState(books);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState();

  const columnData = [{ field: "Books", label: "Books", type: "string" }];

  const clickHandler = () => {
    const inputValue = document.getElementById(
      "ej2-querybuilder_0_group0_rule0_valuekey0"
    ).value;
    setToggle(true);
    setValue(inputValue);
  };
  console.log(value);
  console.log("result", result);
  const unique = result.filter((val) =>
    val.name.toLowerCase().includes(String(value).toLowerCase())
  );

  return (
    <>
      <h2>LCO Book Recommendation</h2>
      <p>Enter technology you want to learn and get the book</p>
      <QueryBuilderComponent width="100%" columns={columnData} />
      <div className="e-qb-button">
        <ButtonComponent
          id="getdata"
          cssClass="e-primary"
          content="Get Book"
          style={{ marginTop: "20px" }}
          onClick={clickHandler}
        />
      </div>
      {toggle && (
        <div style={{ marginLeft: "10px" }}>
          {unique.map((item, index) => (
            <div key={index}>
              <p>
                <strong>Book Name: </strong>
                {item.name}
              </p>
              <p>
                <strong>Description: </strong>
                {item.description}
              </p>
              <a href={item.link}>
                <button
                  style={{
                    backgroundColor: "#383CC1",
                    color: "#fff",
                    textDecoration: "none",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  {item.buttonText}
                </button>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
