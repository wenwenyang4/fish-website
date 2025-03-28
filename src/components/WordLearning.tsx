import React, { useState } from 'react';
import { Paper, Typography, Button, TextField, Box } from '@mui/material';

interface Word {
  word: string;
  meaning: string;
  example: string;
}

const SAMPLE_WORDS: Word[] = [
  {
    word: 'Serendipity',
    meaning: '意外发现；机缘巧合',
    example: 'Meeting you here was pure serendipity!'
  },
  {
    word: 'Ephemeral',
    meaning: '短暂的；瞬息的',
    example: 'Social media fame can be ephemeral.'
  },
  {
    word: 'Mellifluous',
    meaning: '悦耳的；甜美的',
    example: 'Her mellifluous voice filled the room.'
  },
  {
    word: 'Luminous',
    meaning: '发光的；明亮的',
    example: 'The luminous moon lit up the night sky.'
  },
  {
    word: 'Ethereal',
    meaning: '空灵的；飘渺的',
    example: 'The ethereal music created a magical atmosphere.'
  }
];

const WordLearning = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const currentWord = SAMPLE_WORDS[currentWordIndex];

  const handleNext = () => {
    setCurrentWordIndex((prev) => (prev + 1) % SAMPLE_WORDS.length);
    setShowMeaning(false);
    setUserInput('');
    setFeedback('');
  };

  const handleCheck = () => {
    const isCorrect = userInput.toLowerCase() === currentWord.meaning.toLowerCase();
    setFeedback(isCorrect ? '正确！' : '再试一次！');
    if (isCorrect) {
      setTimeout(handleNext, 1500);
    }
  };

  return (
    <Paper className="p-4">
      <Typography variant="h6" gutterBottom>
        摸鱼背单词
      </Typography>
      <Box className="space-y-4">
        <Typography variant="h5" className="text-center">
          {currentWord.word}
        </Typography>
        
        {showMeaning ? (
          <Typography variant="body1" className="text-center">
            {currentWord.meaning}
          </Typography>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMeaning(true)}
            fullWidth
          >
            显示释义
          </Button>
        )}

        <Typography variant="body2" className="text-gray-400">
          {currentWord.example}
        </Typography>

        <Box className="space-y-2">
          <TextField
            fullWidth
            label="输入释义"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCheck}
            fullWidth
          >
            检查
          </Button>
        </Box>

        {feedback && (
          <Typography
            className={`text-center ${
              feedback === '正确！' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {feedback}
          </Typography>
        )}

        <Button
          variant="outlined"
          onClick={handleNext}
          fullWidth
        >
          下一个
        </Button>
      </Box>
    </Paper>
  );
};

export default WordLearning; 