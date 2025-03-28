import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { differenceInDays, endOfWeek, startOfWeek, isWeekend } from 'date-fns';

const WorkdayCounter = () => {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(today, { weekStartsOn: 1 });

  const daysUntilWeekend = differenceInDays(weekEnd, today);
  const daysUntilNextWeekend = daysUntilWeekend + 2; // 加上周末两天

  const getNextMonth = () => {
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    return nextMonth;
  };

  const countWorkdaysUntilMonthEnd = () => {
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    let count = 0;
    let currentDate = new Date(today);

    while (currentDate <= monthEnd) {
      if (!isWeekend(currentDate)) {
        count++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
  };

  return (
    <Paper className="p-4">
      <Typography variant="h6" gutterBottom>
        摸鱼倒计时
      </Typography>
      <Box className="space-y-2">
        <Typography>
          距离周末还有: {daysUntilWeekend} 天
        </Typography>
        <Typography>
          距离下个周末还有: {daysUntilNextWeekend} 天
        </Typography>
        <Typography>
          本月还要上: {countWorkdaysUntilMonthEnd()} 天班
        </Typography>
      </Box>
    </Paper>
  );
};

export default WorkdayCounter; 