import { Editor } from '@monaco-editor/react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface JsonEditorProps {
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
  error?: string;
}

export function JsonEditor({ value, onChange, isValid, error }: JsonEditorProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
        <h2 className="text-lg font-semibold text-gray-700">JSON Schema Editor</h2>
        <div className="flex items-center gap-2">
          {isValid ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500" />
          )}
          <span className={isValid ? 'text-green-600' : 'text-red-600'}>
            {isValid ? 'Valid JSON' : 'Invalid JSON'}
          </span>
        </div>
      </div>
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          defaultLanguage="json"
          value={value}
          onChange={(value) => onChange(value || '')}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingIndent: 'indent',
          }}
        />
      </div>
      {error && (
        <div className="p-4 bg-red-50 border-t border-red-200">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}