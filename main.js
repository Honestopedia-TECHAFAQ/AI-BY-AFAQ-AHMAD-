document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const startButton = document.getElementById('startButton');
  
    function speak(text) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synth.speak(utterance);
    }
    speak("Hello! I am H-tech Solution AI. How can I help you today?");
  
    function startListening() {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US';
  
      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        output.innerText = transcript;
        if (transcript.includes('ceo') || transcript.includes('afaq ahmad')) {
          speak('Afaq Ahmad is the CEO and founder of Honestopedia Tech Solution. He leads the company\'s vision and strategic direction. As the CEO, Afaq is responsible for making key corporate decisions, managing the overall operations, and ensuring the company\'s success and growth.');
        } else if (transcript.includes('salman')) {
          speak('Salman is the Social Media Manager at HTS, responsible for managing the social media presence and handling communication on various platforms.');
        } else if (transcript.includes('daniyal ahmad')) {
          speak('Daniyal Ahmad is the Contact Manager at HTS. He is responsible for managing contacts, fostering relationships with clients, and ensuring effective communication.');
        } else if (transcript.includes('faraz sohail')) {
          speak('Faraz Sohail is the Company Manager at HTS, overseeing overall company operations and ensuring efficient day-to-day activities.');
        } else if (transcript.includes('muhammad zeeshan')) {
          speak('Muhammad Zeeshan is the Technical Operating Manager at HTS, leading the technical team and ensuring the smooth execution of projects.');
        } else if (transcript.includes('focus')) {
          speak('HTS focuses on providing honest and cutting-edge technology solutions, emphasizing integrity and innovation in all its endeavors.');
        } else if (transcript.includes('mission')) {
          speak('The mission of HTS is to revolutionize the tech industry by delivering reliable and transparent solutions that meet the evolving needs of clients.');
        } else if (transcript.includes('vision')) {
          speak('HTS envisions a future where technology is harnessed for positive change, and businesses thrive through ethical and innovative practices.');
        } else if (transcript.includes('values')) {
          speak('The core values of HTS include honesty, innovation, transparency, and a commitment to excellence in every aspect of its operations.');
        } else {
          speak('Sorry, I did not understand. Please ask about a team member, HTS, its focus, mission, vision, values, or the role of the CEO.');
        }
      };  
      recognition.start();
    }
  
    startButton.addEventListener('click', startListening);
  });
  