const quotes = [    
    'The flower that blooms in adversity is the most rare and beautiful of all',
    'All it takes is faith and trust',
    'The past can hurt. But the way I see it, you can either run from it or learn from it',
    'Today is a good day to try',
    'Just because it’s what’s done, doesn’t mean it’s what should be done',
    'Some people are worth melting for',
    'The only way to get what you want in this world is through hard work',
    'Can anybody be happy if they aren’t free?',
    'The only thing predictable about life is its unpredictability',
    'Remember who you are',
    'Giving up is for rookies',
    'Your identity is your most valuable possession. Protect it',
    'If you can’t say something nice, don’t say nothing at all',
    'Always let your conscience be your guide',
    'Ohana means family. Family means nobody gets left behind or forgotten',
    'Because it’s not worth winning if you can’t win big',
    'You want something done, you’ve got to do it yourself',
    'Do not be fooled by its commonplace appearance. Like so many things, it is not what is outside, but what is inside that counts',
    'Practically perfect in every way',
    'Being brave doesn’t mean you go looking for trouble',
    'To infinity and beyond!',
    'Life’s a little bit messy. We all make mistakes. No matter what type of animal you are, change starts with you',
    'Whatever choice you make, let it come from your heart',
    'Adventure is out there',
    'I don’t want to survive. I want to live',
    'Ladies do not start fights, but they can finish them',
    'Do you believe in miracles? YES!',
    'I’m a damsel, I’m in distress, I can handle this. Have a nice day',
    'It’s up to you how far you go. If you don’t try, you’ll never know',
    'If watchin’ is all you’re gonna do, then you’re gonna watch your life go by without ya',
    'Even miracles take a little time',
    'You will always be in my heart',
    'That’s a pie-crust promise. Easily made, easily broken',
    'If you’re going hard enough left, you’ll find yourself turning right',
    'A true hero isn’t measured by the size of his strength but by the strength of his heart',
    'Not everyone can become a great artist, but a great artist can come from anywhere',
    'Everything is possible. Even the impossible',
    'hen life gets you down you know what you’ve gotta do? Just keep swimming',
    'Nothing is more important than our friendship',
    'She warned him not to be deceived by appearances, for beauty is found within',
    'Let love guide your actions',
    'You were my new dream',
    'You’re mad. Bonkers. Off your head. But I’ll tell you a secret, all the best people are',
    'The problem is not the problem. The problem is your attitude about the problem. Do you understand?',
    'You see, when the world turns upside down, the best thing is to turn right along with it',
    'I never look back, darling. It distracts me from the now',
    'From failure we learn, from success not so much',
    'Being young and beautiful is not a crime, you know',
    'Disappointments are to the soul what thunderstorms are to the air',
    'It’s important to always look where you’re headed rather than where you were',
    
    ];
    
    let highlightPosition;
    let wordQueue;
    let startTime;
    let wordCount = 0;
    const quote = document.getElementById('quote');
    const message = document.getElementById('message');
    const input = document.getElementById('typed-value');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    
    
    
    function startGame() {
      
        const quoteIndex = Math.floor(Math.random() * quotes.length);  
        const quoteText = quotes[quoteIndex];
        document.getElementById('stop').disabled = false;
        document.getElementById('typed-value').disabled = false;
      
            highlightPosition = 0;
            wordQueue = quoteText.split(' ');
            quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');
            quote.childNodes[highlightPosition].className = 'highlight';
      
            input.focus();
            input.value = '';
            message.innerText = '';
      
            startTime = new Date().getTime();
            document.body.className = '';
            start.className = 'started';
            setTimeout(() => {start.classNem = 'button'}, 2000);
    
    }
    
    function checkInput() {
      const currentWord = wordQueue[0].replaceAll('.','').replaceAll(',','').replaceAll(';','').replaceAll('!','').replaceAll('’','');
      //console.log(currentWord);
      const typedValue = input.value.trim();
      //console.log(typedValue);
      
        if (currentWord !== typedValue) {
            input.className = currentWord.startsWith(typedValue) ? '' : 'error';
            return;
      
        }
      
      wordQueue.shift();
      input.value = '';
      quote.childNodes[highlightPosition].className = '';
    
      if (wordQueue.length === 0) {
         // gameOver();
        document.getElementById('typed-value').disabled = true;
        document.querySelector('#start').innerText = 'Continue Game';
          return;
      }
      
      highlightPosition++;
      quote.childNodes[highlightPosition].className = 'highlight';
      
      wordCount++;
      console.log(wordCount);
    }
      
    
    
    function gameOver(){
      const elapsedTime = new Date().getTime() - startTime;
      const checkInputValue = input.value.trim();
      
      document.getElementById('typed-value').disabled = true;
      document.getElementById('stop').disabled = true;
      document.getElementById('start').innerHTML = 'Start Game <i class="rocket"></i>';
      //document.querySelector('#start').innerText = 'Start Game';
      
      document.body.className = "winner";
      message.innerHTML = `<span class="congrats">Congratulations</span> <br> You typed ${wordCount} in ${elapsedTime / 1000} seconds.`
      wordCount = 0;
      
    }
    
    document.getElementById('stop').disabled = true;
      
    start.addEventListener('click', startGame);
    input.addEventListener('input', checkInput);
    stop.addEventListener('click', gameOver);
    
    
    
    
    
    