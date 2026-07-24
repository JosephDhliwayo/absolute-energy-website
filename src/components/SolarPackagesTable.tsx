const ROWS = [
  { size: "1 kVA – 2 kVA", profile: "Lighting, phone/laptop charging, TV, small essential loads" },
  { size: "3 kVA – 4 kVA", profile: "Above, plus refrigerator and general small appliances" },
  { size: "5 kVA – 6.5 kVA", profile: "Above, plus one inverter aircon and/or booster pump" },
  { size: "7 kVA – 9 kVA", profile: "Larger household, multiple aircons and/or a small borehole pump" },
  {
    size: "10 kVA – 12 kVA",
    profile: "Large households with heavy combined cooling, pumping and appliance load",
  },
];

export default function SolarPackagesTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-ae-lightgrey">
      <table className="w-full min-w-[420px] text-left text-sm">
        <thead className="bg-ae-charcoal text-white">
          <tr>
            <th className="px-4 py-3 font-heading font-semibold">System Size</th>
            <th className="px-4 py-3 font-heading font-semibold">Typical Household Profile (indicative)</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row.size} className={i % 2 === 0 ? "bg-white" : "bg-ae-lightgrey"}>
              <td className="px-4 py-3 font-semibold whitespace-nowrap text-ae-charcoal">{row.size}</td>
              <td className="px-4 py-3 text-ae-warmgrey">{row.profile}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-ae-lightgrey bg-white px-4 py-3 text-xs text-ae-warmgrey">
        These are indicative sizes for common, standard residential setups, a guide only. Variations in
        topography, cable run lengths, appliance runtime and site conditions may change the correct size, in
        which case a dialogue with our team is recommended. Any residential system sized above 12 kVA
        automatically requires a site assessment.
      </p>
    </div>
  );
}
