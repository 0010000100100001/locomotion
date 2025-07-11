export default function Root({ style, children }) {
  return (
    <div className={style}>
      {children}
    </div>
  );
}
