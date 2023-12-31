import clsx from "clsx";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { ImageProps } from "next/image";

const components: any = {
  Image: (props: ImageProps) => (
    <Image
      {...props}
      alt={props.src.toString()}
      className={clsx(props.className, "rounded-lg")}
    />
  ),
};

type MdxProps = {
  code: string;
};

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <article>
      <Component components={components} />
    </article>
  );
}
