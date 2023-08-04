import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Editor, Input, OuterContainer, Row } from "./style";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./../../editor.js/tools";

function EditArticle() {
  const ejInstance = useRef();
  const titleRef = useRef();
  const definitionRef = useRef();
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
    }; // eslint-disable-next-line
  }, []);

  const getData = () => {
    let data = {
      title: titleRef.current.value,
      definition: definitionRef.current.value,
    };
    if (editorForSaving !== null)
      editorForSaving
        .save()
        .then((outputData) => {
          data.articleData = outputData;
          console.log("Sending data: ", data);
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
  };

  return (
    <OuterContainer>
      <Container>
        <Row>
          <Input ref={titleRef} placeholder="Sarlavhani kiriting" top="true" />
        </Row>
        <Row>
          <Input ref={definitionRef} placeholder="Tavsifini kiriting" />
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
