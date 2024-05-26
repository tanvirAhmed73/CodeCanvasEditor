import { useRef, useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "../../constants";
import CodeOutput from "./CodeOutput";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const language = "javascript"

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Box  mt={10}>
      <HStack spacing={4}>
        <Box w="50%">
          <div>
            <Text mb={3} ml={4} fontSize={30}>Language: JavaScript</Text>
          </div>
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <CodeOutput editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
