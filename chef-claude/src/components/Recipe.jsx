import ReactMarkdown from "react-markdown";
export default function Recipe(props) {
  function removeThinkSection(response) {
    return response.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
  }

  const AIrecipe = removeThinkSection(props.recipe);
  return (
    <section aria-live="polite" className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{AIrecipe}</ReactMarkdown>
    </section>
  );
}
