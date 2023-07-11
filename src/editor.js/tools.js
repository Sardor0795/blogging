// tools.js
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
// import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import axios from "axios";
// import uploader from "@ajite/editorjs-image-base64";

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: {
    class: Embed,
    inlineToolbar: true,
  },
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
  },
  code: {
    class: Code,
    inlineToolbar: true,
  },
  linkTool: {
    class: LinkTool,
    inlineToolbar: true,
  },
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("image", file);
          const response = await axios.post(
            `https://api.bossblog.uz/api/v1/upload/image`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              withCredentials: false,
            }
          );
          return response.data;
        },
        async uploadByUrl(url) {
          const response = await axios.post(
            `https://api.bossblog.uz/api/v1/upload/upload-by-url`,
            {
              url,
            }
          );
          return response.data;
        },
      },
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: {
    class: Delimiter,
    inlineToolbar: true,
  },
  inlineCode: {
    class: InlineCode,
    inlineToolbar: true,
  },
  simpleImage: {
    class: SimpleImage,
    inlineToolbar: true,
  },
};
