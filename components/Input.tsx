import { useSignal } from "@preact/signals";

export default function Input() {
  const status = useSignal("Click to Listen");
  const result = useSignal("");
  const input = useSignal("");
  let recognition: any = null;

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
