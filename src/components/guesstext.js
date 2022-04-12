// import "../index.css";

export default function guesstext ({ text }) {
  return (
    <div>
      <p className="guesstext">{text ?? "Placeholder"}</p>
	  {/* <p className={styles.guesstext}>Normals</p> */}
    </div>
  );
};

// export default guesstext();