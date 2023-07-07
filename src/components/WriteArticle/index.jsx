import React from "react";
import { Container, Editor, OuterContainer } from "./style";
import EditorJs from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./../../editor.js/tools";

function WriteArticle() {
  const editor = new EditorJs({
    holder: "editorjs-write",
    tools: EDITOR_JS_TOOLS,
    autofocus: true,
    // data: {}
  });

  const getData = () => {
    editor.isReady.then(() => {
      editor
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    });
  };

  const clear = () => {
    editor.isReady.then(() => {
      editor.clear();
    });
  };

  return (
    <OuterContainer>
      <Container>
        <Editor id="editorjs-write"></Editor>
        <button onClick={getData}>get data</button>
        <button onClick={clear}>clear</button>
      </Container>
    </OuterContainer>
  );
}

export default WriteArticle;
