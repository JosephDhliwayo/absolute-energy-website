const ROWS = [
  { demand: "Up to 5,000 L/day", use: "Household water supply, small garden" },
  { demand: "5,000 – 10,000 L/day", use: "Larger household, small-holding, limited livestock" },
  { demand: "10,000 – 20,000 L/day", use: "Small-holding with livestock and/or small garden irrigation" },
];

export default function WaterPackagesTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-ae-lightgrey bg-white">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead className="bg-ae-charcoal text-white">
          <tr>
            <th className="px-4 py-3 font-heading font-semibold">Daily Demand</th>
            <th className="px-4 py-3 font-heading font-semibold">Typical Use (indicative)</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.demand} className={i % 2 === 0 ? "bg-white" : "bg-ae-lightgrey"}>
              <td className="px-4 py-3 font-semibold whitespace-nowrap text-ae-charcoal">{row.demand}</td>
              <td className="px-4 py-3 text-ae-warmgrey">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-ae-lightgrey bg-white px-4 py-3 text-xs text-ae-warmgrey">
        Standard residential water pumping/irrigation packages are guided up to 20,000 litres per day.
        Community piped water schemes and any agricultural/irrigation project always require a mandatory site
        assessment, regardless of daily demand.
      </p>
    </div>
  );
}
