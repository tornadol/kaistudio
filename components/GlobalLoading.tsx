"use client";

interface GlobalLoadingProps {
  isLoading: boolean;
}

export default function GlobalLoading({ isLoading }: GlobalLoadingProps) {
  if (!isLoading) return null;

  return (
    <div className="loading-box">
      <div className="spinner">
        <div className="spinner__item1" />
        <div className="spinner__item2" />
        <div className="spinner__item3" />
        <div className="spinner__item4" />
      </div>
    </div>
  );
}
