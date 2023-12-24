import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image,
};

type MdxProps = {
  code: string;
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component />;
}
