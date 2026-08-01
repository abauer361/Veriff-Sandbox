export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`rounded-xl bg-surface p-5 shadow-sm ring-1 ring-outline-variant/60 md:p-6 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
