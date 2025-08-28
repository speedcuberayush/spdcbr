import React, { useState, useRef, useEffect } from "react";
import "./ChatWithMe.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import AyushAi from "../../assets/images/ayushai.png";
import { Avatar } from "@mui/material";
import ResponsePreloader from "./ResponsePreloader";

// Query component
function QueryThing({ text }) {
  return (
    <div className="QuerySent">
      <p className="Querypara">{text}</p>
    </div>
  );
}

function Response({ text, loading }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!loading && text) {
      setDisplayedText(""); // reset before typing
      setIsTyping(true);
      let index = 0;

      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1)); 
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 12);

      return () => {
        clearInterval(interval);
        setIsTyping(false);
      };
    } else if (!text) {
      setDisplayedText("");
      setIsTyping(false);
    }
  }, [text, loading]);

  useEffect(() => {
    if (loading) {
      setDisplayedText("");
      setIsTyping(false);
    }
  }, [loading]);

  return (
    <div className="ResponseByAI">
      {loading ? (
        <ResponsePreloader />
      ) : (
        <>
          <Avatar src={AyushAi} alt="Ayush AI" />
          <p className="ResponsePara">{displayedText}</p>
        </>
      )}
    </div>
  );
}

// 🔹 Sample Q&A data
const sampleQA = [
  {
    input: "How tall are you?",
    output:
      "I'd love to say I'm 6'3, but in reality, my height is 190 cm, which puts me just under 6'3.",
  },
  {
    input:
      "Based on all the data I've given you, what's a core belief or a recurring pattern in my thinking that I'm not aware of myself?",
    output:
      "From the way you ask and process things, I notice a recurring pattern: you don’t jump into actions blindly. You almost always do a kind of pre-calculation in your head, weighing possibilities and outcomes before moving. It shows you’re very calculative — not in a cold way, but in a strategic way. You like to feel prepared and reduce risk before committing to something.",
  },
  {
    input: "How fast can you solve a Rubik's Cube?",
    output: "My personal best for a 3x3 cube is 6.21 seconds!",
  },
  {
    input: "What is a 'pen game,' and why is it called that?",
    output:
      "For me, a pen game is basically my way of talking about creativity — whether it’s writing lyrics, rapping, or even sketching. I call it that because the pen represents expression and skill, and the “game” is about how sharp or strong you are with it. So when I say “pen game,” I’m really talking about how I put my thoughts on paper and turn them into something that stands out.",
  },
  {
    input: "Where are you from?",
    output:
      "On paper, I hail from Jharkhand, but I was raised in the environment of the Indian Air Force, which meant moving around and living in different parts of the country. In 2012, when my father was posted to New Delhi, we bought our house there, and since then Delhi has been our permanent base. That said, because my father is still in service, we continue to migrate depending on his postings. So while my roots are in Jharkhand, you can pretty much consider me a Delhiite.",
  },
];

function ChatWithMe({ toggleMode }) {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const textareaRef = useRef(null);
  const chatBoxRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [inputValue]);

  // Scroll to bottom whenever chat updates
  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { type: "query", text: inputValue };

    // 🔹 Find a matching sample response
    const matchedSample = sampleQA.find(
      (qa) => qa.input.toLowerCase() === inputValue.trim().toLowerCase()
    );

    const aiMessage = {
      type: "response",
      text: matchedSample
        ? matchedSample.output
        : "I don’t have a response for that yet. Try asking something else from my sample data!",
      loading: true,
    };

    setChatHistory((prev) => [...prev, userMessage, aiMessage]);
    setInputValue("");

    // Simulate AI response delay
    setTimeout(() => {
      setChatHistory((prev) =>
        prev.map((msg) =>
          msg === aiMessage ? { ...msg, loading: false } : msg
        )
      );
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="AyushAI">
      <div className="sayHi ayushAImode" onClick={toggleMode}>
        <h1 className="speedcuber">Speed Cuber</h1>
        <h1 className="ayush">AYUSH</h1>
      </div>

      <div className="Chatbox" ref={chatBoxRef}>
        {chatHistory.map((msg, idx) =>
          msg.type === "query" ? (
            <QueryThing key={idx} text={msg.text} />
          ) : (
            <Response key={idx} text={msg.text} loading={msg.loading} />
          )
        )}
      </div>

      <div className="ChatWithMe">
        <div className="inputContainer">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ASK WOLF ......"
            rows={1}
          />
          <IconButton
            onClick={handleSend}
            sx={{
              backgroundColor: "#fff",
              "&:hover": { backgroundColor: "#ddd" },
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </div>
        <p className="caution">
          THE PROVIDED INFORMATION MAY BE WRONG as model is still under
          development
        </p>
      </div>
    </div>
  );
}

export default ChatWithMe;
