import React from 'react';
import Editor from '@monaco-editor/react';

export const MonacoEditorField = ({ value, onChange, language = "html", height = "300px" }) => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden my-2">
      <Editor
        height={height}
        language={language}
        value={value}
        onChange={(val) => onChange(val)}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 12,
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </div>
  );
};
