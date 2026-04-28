import React, { useEffect, useId } from 'react';
import { SectionWrapper, sectionFields, defaultSectionProps } from './SectionWrapper';

export const CustomCodeBlock = {
  fields: {
    ...sectionFields,
    html: { 
      type: "text",
      render: ({ value, onChange }) => {
        // We'll import this dynamically or assume it's available in the Puck config
        return null; // This will be handled in app/page.jsx
      }
    },
    css: { type: "text" },
    js: { type: "text" },
  },
  defaultProps: {
    ...defaultSectionProps,
    html: '<div class="custom-card">\n  <h2>Custom HTML</h2>\n  <p>You can write any HTML here.</p>\n  <button id="btn-click">Click Me</button>\n</div>',
    css: '.custom-card {\n  background: #f3f4f6;\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  border: 2px dashed #cbd5e1;\n}\n#btn-click {\n  background: #000;\n  color: #fff;\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  margin-top: 1rem;\n  cursor: pointer;\n}',
    js: '// JavaScript Example\nconst btn = container.querySelector("#btn-click");\nif (btn) {\n  btn.onclick = () => alert("Hello from Custom JS!");\n}',
  },
  render: ({ html, css, js, paddingTop, paddingBottom, bgColor, customCss }) => {
    const id = useId().replace(/:/g, "");
    const containerId = `custom-code-${id}`;

    useEffect(() => {
      if (!js) return;
      const container = document.getElementById(containerId);
      if (!container) return;

      try {
        const script = document.createElement("script");
        script.innerHTML = `
          (function() {
            const container = document.getElementById("${containerId}");
            if (container) {
              ${js}
            }
          })();
        `;
        document.body.appendChild(script);
        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
      } catch (e) {
        console.error("Custom JS Error:", e);
      }
    }, [js, containerId, html]); // Re-run if HTML changes so JS can re-bind

    return (
      <SectionWrapper paddingTop={paddingTop} paddingBottom={paddingBottom} bgColor={bgColor} customCss={customCss}>
        <div id={containerId} className="max-w-7xl mx-auto px-8">
          {css && <style dangerouslySetInnerHTML={{ __html: css }} />}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </SectionWrapper>
    );
  },
};
