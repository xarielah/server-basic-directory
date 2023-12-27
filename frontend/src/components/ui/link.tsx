import { LinkHTMLAttributes } from "react";

export default function Link(
  props: LinkHTMLAttributes<HTMLAnchorElement> & ILink
) {
  return (
    <a
      {...props}
      target="_blank"
      className={`ease-in-out duration-150 hover:text-gray-400 font-light${
        props.className ? " " + props.className : ""
      }`}
    >
      {props.children}
    </a>
  );
}

interface ILink {
  children: string;
}
