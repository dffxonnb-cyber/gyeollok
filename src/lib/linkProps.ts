export function getExternalLinkProps(href: string) {
  return {
    href,
    target: "_blank",
    rel: "noreferrer",
  } as const;
}
