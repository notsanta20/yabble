function alert(message: string) {
  const main: HTMLElement | null = document.querySelector("main");
  const div: HTMLDivElement = document.createElement("div");

  div.className =
    "alert fixed py-2 px-3 text-white text-sm font-regular font-[space_grotesk] rounded-2xl border-2 border-(--glass-border-dark) bg-(--glass-fill-dark) backdrop-blur-(--glass-blur) top-[10%] md:bottom-[3%] md:top-auto";
  div.textContent = message;
  main?.appendChild(div);

  removeAlert(div);
}

function removeAlert(child: HTMLDivElement) {
  setTimeout(() => {
    child.classList.add("removeAlert");
  }, 3500);
  setTimeout(() => {
    child.remove();
  }, 5000);
}

export default alert;
