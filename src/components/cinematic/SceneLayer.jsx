export function SceneLayer({ className = '', children, depth, ...props }) {
  return <div className={`scene-layer ${className}`} data-depth={depth} {...props}>{children}</div>
}
