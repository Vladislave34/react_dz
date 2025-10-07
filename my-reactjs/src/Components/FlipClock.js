import FlipDigit from "./FlipDigit";

export default function FlipClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return (
        <div className="flip-clock">
            {[...hours+":", ...minutes+":", ...seconds].map((d, i) => (
                <FlipDigit key={i} digit={d} />
            ))}
        </div>
    );
}
