import React from "react";
// src\components\DropDownMenu.jsx
function DropDownMenu () {
  const localeInfo={"Locale":["en-US","zh-CN","ex-MX","aa-BB"],
"Category":["News","Film","Sport"]}
  const paramType=Object.keys(localeInfo)
  console.log(Object.keys(localeInfo));
  return (
    <div>
      <p>
      DropDownMenu


      </p>
      <div>
      {paramType.map((item,index) =>
        <div>
          <p value={index}>{item}</p>
          <select
              defaultValue="请选择"
              style={{ width: 120 }}
              // onChange={watersParameter}
              >
              {localeInfo[item].map((data, key) => (
                <option value={key}>{data}</option>
              ))}
          </select>
        </div>
      )}
      </div>
      </div>
  )

}

export default DropDownMenu;
