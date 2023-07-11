import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Editor, Input, OuterContainer, Row } from "./style";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./../../editor.js/tools";

function WriteArticle() {
  const ejInstance = useRef();
  let [editorForSaving] = useState(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs-write",
      onReady: () => {
        ejInstance.current = editor;
      },
      tools: EDITOR_JS_TOOLS,
      placeholder: "Shu yerga yozing",
    });
    editorForSaving = editor;
  };

  useEffect(() => {
    if (!ejInstance.current) initEditor();

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const getData = () => {
    if (editorForSaving !== null)
      editorForSaving
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
  };

  return (
    <OuterContainer>
      <Container>
        <Row>
          <Input placeholder="Sarlavhani kiriting" />
        </Row>
        <Editor id="editorjs-write" />
        <Row>
          <Button onClick={getData}>Chop etish</Button>
        </Row>
      </Container>
    </OuterContainer>
  );
}

export default WriteArticle;
