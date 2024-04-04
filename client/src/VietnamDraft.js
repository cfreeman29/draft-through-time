import React, { useState } from 'react';
import draftData from './data/vietnam_draft_data.json';
import draftThresholds from './data/draftThresholds.json';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';

function VietnamDraft() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [draftInfo, setDraftInfo] = useState('');
  const [showDraftDetails, setShowDraftDetails] = useState(false);
  
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}`);
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}`);

  const onSubmit = data => {
    const { month, day } = data;
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
      setDraftInfo(`Based on your birthday, you would have been drafted: ${infoMessages}.`);
    } else {
      setDraftInfo("Based on your birthday, you would not have been drafted.");
    }

    setShowDraftDetails(true);
  };

  return (
    <div>
      <h1>Vietnam War Draft Checker</h1>
      <h2>Check Your Draft Status</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="month"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field} className={errors.month ? 'error' : ''}>
              <option value="">--Select Month--</option>
              {months.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          )}
        />
        {errors.month && <p>This field is required.</p>}

        <Controller
          name="day"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <select {...field} className={errors.day ? 'error' : ''}>
              <option value="">--Select Day--</option>
              {days.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          )}
        />
        {errors.day && <p>This field is required.</p>}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="submit-button"
        >
          Check Draft Status
        </motion.button>
      </form>

      {showDraftDetails && (
        <motion.div
          className="info-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {draftInfo && <p>{draftInfo}</p>}
          <div>
            <h2>Vietnam War Draft Lottery Information</h2>
            <p><strong>1969:</strong> Lottery on December 1, 1969, for men born from 1944 through 1950. Highest number called: 195</p>
            <p><strong>1970:</strong> Lottery on July 1, 1970, for men born in 1951. Highest number called: 125.</p>
            <p><strong>1971:</strong> Lottery on August 5, 1971, for men born in 1952. Highest number called: 95.</p>
            <p><strong>1972:</strong> Lottery on February 2, 1972, for men born in 1953. No new draft orders were issued after 1972.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default VietnamDraft;