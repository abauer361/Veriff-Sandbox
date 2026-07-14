export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`rounded-lg border border-outline-variant/40 bg-surface-container p-5 md:p-6 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
