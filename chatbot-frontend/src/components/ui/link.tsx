interface LinkProps {
  url: string;
}

// const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
//   e.preventDefault();
//   window.open(e.currentTarget.href, "_blank");
// };

export default function Link({ url }: LinkProps) {
  return <a href={url}>{/* {url} */}</a>;
}
