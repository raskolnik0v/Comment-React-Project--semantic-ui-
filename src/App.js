import React from "react";
import Comment from "./Comment";
import { faker } from "@faker-js/faker";
import Card from "./Card";
const App = () => {
  return (
    <div
      className="ui comments"
      style={{
        paddingTop: "10px",
        paddingLeft: "15px",
      }}
    >
      <Card>
        <Comment
          name="ÇETE MAHMUT"
          timeago="3"
          star="4"
          avatar={faker.image.avatar()}
          comment="React Efsane"
        />
      </Card>

      <Card>
        <Comment
          name="Latif AVCU"
          timeago="2"
          star="5"
          avatar={faker.image.avatar()}
          comment="Enneme laaa"
        />
      </Card>
    </div>
  );
};
export default App;
