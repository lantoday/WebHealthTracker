export default function ErrorPage({ error }: { error: string | null }) {
  return (
    <div className="loading-container">
      <div className="alert alert-danger" role="alert">
        <span className="sr-only">{error}</span>
      </div>
    </div>
  );
}
