let recognition;
let isRecognizing = false;

export const startVoiceRecognition = (navigate) => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    console.error("SpeechRecognition API not supported.");
    return;
  }

  if (!recognition) {
    recognition = new SpeechRecognition();

    recognition.onstart = () => {
      console.log("Voice recognition started. Speak into the microphone.");
      isRecognizing = true;
    };

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript.toLowerCase().trim();
      transcript = transcript.replace(/\s+/g, " "); // Normalize spaces
      console.log("Voice recognized: ", transcript);

      switch (transcript) {
        case "go to home":
        case "home":
          navigate("/");
          break;
        case "go to about":
        case "about":
          navigate("/about");
          break;
        case "go to contact":
        case "contact":
          navigate("/contact");
          break;
        case "go to services":
        case "services":
          navigate("/services");
          break;
        case "go to portfolio":
        case "portfolio":
          navigate("/portfolio");
          break;
        case "go to testimonials":
        case "testimonials":
          navigate("/testimonials");
          break;
        default:
          console.log("Command not recognized:", transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
      isRecognizing = false; // Reset recognition state on error
    };

    recognition.onspeechend = () => {
      console.log("Speech ended.");
      isRecognizing = false;
    };

    recognition.onend = () => {
      isRecognizing = false;
      console.log("Voice recognition ended.");
    };
  }

  if (!isRecognizing) {
    try {
      recognition.start();
      console.log("Voice recognition initialized.");
    } catch (error) {
      console.error("Error starting recognition:", error);
      isRecognizing = false;
    }
  } else {
    console.log("Voice recognition already active.");
  }
};

export const stopVoiceRecognition = () => {
  if (recognition && isRecognizing) {
    recognition.stop();
    isRecognizing = false;
    console.log("Voice recognition stopped.");
  }
};
