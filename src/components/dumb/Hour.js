export const Hour = () => {

  return (
    <div className="hour">
      {Array(23)
        .fill(1)
        .map((e, i) => (
          <div key={e + i}>
            {e + i < 10 ? "0" + (e + i) + ": 00" : e + i + ": 00"}
          </div>
        ))}
    </div>
  );
};
