export default function ImgWithMax ({
  src = '',
  maxWidth,
  className,
  mode = 'aspectFill',
  ...delegated
}) {
  if (!src.includes('http')) src = 'https://www.xiaoxili.com' + src
  src = src + `?imageView2/2/w/${maxWidth}/format/webp/ignore-error/1`
  return (
    <img src={src} className={className} mode={mode} webp {...delegated} />
  );
};