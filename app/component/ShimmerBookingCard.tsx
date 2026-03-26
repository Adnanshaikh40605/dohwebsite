const ShimmerBookingCard = () => {
  return (
    <>
      <div className="shimmer-card">
        <div className="shimmer-title">
          <div className="shimmer-head1"></div>
          <div className="shimmer-head2"></div>
        </div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line short"></div>
      </div>

      <style jsx>{`
        /* Shimmer Effect Styling */
        .shimmer-card {
          background: #d1d1d1; /* Slightly darker gray */
          padding: 16px;
          border-radius: 20px;
          margin-bottom: 12px;
          position: relative;
          overflow: hidden;
        }

        .shimmer-title {
          display: flex;
          justify-content: space-between;
        }

        .shimmer-head1,
        .shimmer-head2 {
          height: 14px;
          width: 10%;
          background: #bdbdbd; /* Slightly darker */
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .shimmer-line {
          height: 14px;
          width: 80%;
          background: #bdbdbd;
          border-radius: 4px;
          margin-bottom: 6px;
        }

        .shimmer-line.short {
          width: 15%;
        }

        /* Diagonal Shimmer Animation */
        .shimmer-card::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,  /* Change angle to make it diagonal */
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%, /* More visible shimmer */
            rgba(255, 255, 255, 0) 100%
          );
          transform: translateX(-100%);
          animation: diagonal-shimmer 1.5s infinite; /* Slower and smoother */
        }

        @keyframes diagonal-shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        @media (max-width: 768px) {
          .shimmer-head1,
          .shimmer-head2 {
            width: 20%;
          }
          .shimmer-line.short {
            width: 25%;
          }
        }
      `}</style>
    </>
  );
};

export default ShimmerBookingCard;
