import { useSignal } from "@preact/signals";
function is_server() {
  return !(typeof window != "undefined" && window.document);
}

export default function Input() {
  const status = useSignal("Click to Listen");
  const result = useSignal("");
  const input = useSignal("");
  let recognition: any = null;

  if (is_server()) {
    console.log("teste");
  }

  function handleListen() {
    console.log("handleListen", input.value);
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.onstart = () => {
      status.value = "Listening...";
    };

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;

      result.value = transcript;
      status.value = "Buscar";
      input.value = "";
    };

    if (recognition) {
      recognition.start();
    }
  }
  return (
    <>
      <input
        class="bg-slate-600 text-white"
        placeholder="Busca"
        type="text"
        value={input.value}
        onChange={(e) => input.value = e.target.value}
      />
      <button onClick={handleListen}>{status.value}</button>
      <p>{result.value}</p>
    </>
  );
}
