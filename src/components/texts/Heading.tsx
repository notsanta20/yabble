interface formHeading {
  text: string;
}

export function HeadingLarge() {
  return (
    <h1 className="font-[space_grotesk] text-6xl font-semibold text-white">
      YABBLE
    </h1>
  );
}

export function HeadingSmall() {
  return (
    <h1 className="font-[space_grotesk] text-3xl font-semibold text-white">
      YABBLE
    </h1>
  );
}

export function FormHeading({ text }: formHeading) {
  return (
    <h1 className="font-[Syncopate] text-center text-white text-4xl mb-10">
      {text}
    </h1>
  );
}
