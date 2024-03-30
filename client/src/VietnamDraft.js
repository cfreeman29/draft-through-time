import React, { useState } from 'react';
import draftData from './data/vietnam_draft_data.json';
import draftThresholds from './data/draftThresholds.json';

function VietnamDraft() {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [draftInfo, setDraftInfo] = useState('');
  const [showDraftDetails, setShowDraftDetails] = useState(false);

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    let draftedInfo = [];

    Object.keys(draftData.Vietnam).forEach(year => {
      const yearData = draftData.Vietnam[year];
      const entry = yearData.find(e => e.date === formattedDate);
      if (entry && year !== "1972" && entry.value <= draftThresholds[year]) {
        draftedInfo.push({ year: year, number: entry.value });
      }
    });

    if (draftedInfo.length > 0) {
      const infoMessages = draftedInfo.map(info => `In ${info.year}, with draft number ${info.number}`).join('; ');
      setDraftInfo(`You would have been drafted: ${infoMessages}.`);
    } else {
      setDraftInfo("Based on your draft number, you would not have been drafted.");
    }
    setShowDraftDetails(true);
  };

  return (
    <div>
      <h2>Vietnam War Draft Number Checker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Month:
            <select value={month} onChange={(e) => setMonth(e.target.value)} required>
              <option value="">--Select Month--</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Day:
            <select value={day} onChange={(e) => setDay(e.target.value)} required>
              <option value="">--Select Day--</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Check Number</button>
      </form>
      {draftInfo && <p>{draftInfo}</p>}
      {showDraftDetails && (
        <div>
          <p>
            <strong>1969:</strong> Lottery on December 1, 1969, for men born from 1944 through 1950. Highest number called: 195.
          </p>
          <p>
            <strong>1970:</strong> Lottery on July 1, 1970, for men born in 1951. Highest number called: 125.
          </p>
          <p>
            <strong>1971:</strong> Lottery on August 5, 1971, for men born in 1952. Highest number called: 95.
          </p>
          <p>
            <strong>1972:</strong> Lottery on February 2, 1972, for men born in 1953. No new draft orders were issued after 1972.
          </p>
        </div>
      )}
    </div>
  );
}

export default VietnamDraft;