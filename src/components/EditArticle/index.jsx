import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Editor, Input, OuterContainer, Row } from "./style";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./../../editor.js/tools";

function EditArticle() {
  const ejInstance = useRef();
  let [editorForSaving] = useState(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs-edit",
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
        <Editor id="editorjs-edit" onMouseOver={() => {}} />
        <Row>
          <Button onClick={getData}>Saqlash</Button>
        </Row>
      </Container>
    </OuterContainer>
  );
}

export default EditArticle;
