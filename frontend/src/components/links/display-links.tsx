import LinkBlock from "./link-block";
import { links } from "./links";
import LinksContainer from "./links-container";

export default function DisplayLinks() {
  return (
    <LinksContainer>
      {links.map((link) => (
        <LinkBlock link={link} key={link.href} />
      ))}
    </LinksContainer>
  );
}
