import { type ReactNode } from "react";

export default function LinksContainer({ children }: ILinksContainer) {
  return <section className="flex flex-col gap-6">{children}</section>;
}

interface ILinksContainer {
  children: ReactNode;
}
