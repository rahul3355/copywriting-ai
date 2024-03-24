// src/App.js

import React, { useState } from "react";
import axios from "axios";
import CopywritingForm from "./components/CopywritingForm";
import "./App.css"; // Import standard CSS file

const App = () => {
  const [generatedCopy, setGeneratedCopy] = useState("");

  const generateCopy = async (formData) => {
    const prompt = `Generate a compelling copy for a product named ${formData.productName}. Brief description: ${formData.description}. Target customer: ${formData.idealCustomer}. Desired outcome: ${formData.dreamOutcome}.`;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const botMessage = response.data.choices[0].message.content;
      setGeneratedCopy(botMessage);
    } catch (error) {
      console.error("Error generating copy:", error);
    }
  };

  return (
    <div>
      <CopywritingForm onSubmit={generateCopy} />
      {generatedCopy && (
        <div className="generatedCopyContainer">
          <h3 className="generatedCopyHeader">Generated Copy:</h3>
          <p className="generatedCopyText">{generatedCopy}</p>
          <h4 className="generatedCopyEnd">END</h4>
        </div>
      )}
    </div>
  );
};

export default App;
