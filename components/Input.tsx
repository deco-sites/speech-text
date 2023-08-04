import { useSignal } from "@preact/signals";

export default function Input() {
  const status = useSignal("Click to Listen");
  const result = useSignal("");
  const input = useSignal("");
  let recognition: any = null;

  if ((window as any).webkitSpeechRecognition) {
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.onstart = () => {
      status.value = "Listening...";
    };

    recognition.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;

      result.value = transcript;
      status.value = "Buscar";
      input.value = "";
    };
  }

  function handleListen() {
    console.log("handleListen", input.value);
    recognition.lang = "pt-BR";

    if (recognition) {
      recognition.start();
    }
  }
  return (
    <>
      <input
        class="bg-slate-900 text-purple-50"
        placeholder="Busca"
        type="text"
        value={result.value}
      />
      <button onClick={handleListen}>{status.value}</button>
      {/* <p>{result.value}</p> */}
    </>
  );
}
