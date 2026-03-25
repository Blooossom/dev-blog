export default function MockLink({ href, children, ...props }: any) {
  return <a href={href} {...props}>{children}</a>
}
