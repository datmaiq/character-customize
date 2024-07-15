// src/App.js
import React, { useState, useCallback, useEffect, useMemo } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
import { Title } from "./components/StyledComponents";
import { total, generateRandomAvatar } from "./utils/avatarUtils";

const renderPatternList = (renderAvatar, obj, dir = "") => {
  let content = [];
  for (let key in obj) {
    const value = obj[key];
    content.push(
      typeof value === "object" && !Object.hasOwn(value, "name") ? (
        renderPatternList(renderAvatar, value, key)
      ) : (
        <PartList
          key={key}
          keyObj={key}
          len={value.qty}
          name={value.name}
          dir={`${dir}/${key}`}
          renderAvatar={renderAvatar}
        />
      )
    );
  }

  return content;
};

function App() {
  const [avatar, setAvatar] = useState({});

  const randomAvatar = useCallback(() => {
    const newAvatar = generateRandomAvatar();
    setAvatar(newAvatar);
  }, []);

  useEffect(() => {
    setAvatar(generateRandomAvatar());
  }, []);

  const renderAvatar = useCallback((name, index) => {
    setAvatar((prevAvatar) => ({
      ...prevAvatar,
      [name]: {
        ...prevAvatar[name],
        dir: index,
      },
    }));
  }, []);

  const content = useMemo(
    () => renderPatternList(renderAvatar, total),
    [renderAvatar]
  );

  return (
    <div className="background">
      <Title>🚻 Character Customize 🚻</Title>
      <div className="container">
        <Avatar avatar={avatar} randomAvatar={randomAvatar} />
        <div className="item-clothe">{content}</div>
      </div>
    </div>
  );
}

export default App;
