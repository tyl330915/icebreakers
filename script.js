const topics = [

    "What’s the last song you listened to?",
    "Do you follow any influencers or celebrities on social media? If so, who?",
    "What’s your favorite genre of movies or books?",
    "Have you ever unfollowed someone on social media? Why?",
    "What do you think about celebrities being canceled?",
    "What’s a popular TV show or movie you couldn’t get into?",
    "Do you think media representation is important? Why?",
    "What’s the most interesting article you’ve read recently?",
    "Do you think social media has more positive or negative impacts?",
    "If you could have dinner with a character from a book or movie, who would it be?",
    "What’s the last movie you watched and what did you think about it?",
    "How much news do you consume in a day? What are the sources?",
    "Do you think it is important to keep up with national and world news? Why?",
    "What’s your favorite social media platform and why?",
    "What was the last book you read? Would you recommend it?",
    "Do you listen to podcasts? If so, which ones are your favorites?",
    "What’s the most binge-worthy TV series you’ve watched recently?",
    "Have you ever considered starting a blog or a YouTube channel? What would it be about?",
    "What’s the most good documentary you’ve watched?",
    "What’s your opinion on the influence of social media on society today?",
    "What’s the most interesting place you’ve ever visited?",
    "What’s something you could talk about for hours?",
    "What’s your favorite hobby or pastime?",
    "What’s the most challenging thing you’ve ever done?",
    "What’s something most people don’t know about you?",
    "What’s the most daring thing you’ve ever done?",
    "What’s the last thing you learned that surprised you?",
    "What’s something you want to achieve in the next year?",
    "Do you prefer to watch movies at home or in a theater? Why?",
    "What’s a book that changed your perspective?",
    "What’s your favorite video game and why?",
    "What’s a movie or TV show that you think is overrated?",
    "If you could write a book, what would it be about?",
    "What piece of technology could you not live without?",
    "Have you ever built or modified your own computer?",
    "What’s one technology skill you wish you had?",
    "If you could invent a piece of technology, what would it do?",
    "What’s your favorite social media platform and why?",
    "Do you prefer e-books or physical books?",
    "What’s the most interesting tech news you’ve read recently?",
    "What’s your opinion on artificial intelligence?",
    "Have you ever tried coding? If so, what did you create?",
    "How do you feel about the impact of technology on our privacy?",
    "What’s the most impressive use of technology you’ve ever seen?",
    "What tech gadget is currently on your wish list?",
    "How has technology changed your life in the last five years?",
    "What’s one piece of technology you wish never existed?",
    "If you could improve one piece of technology you use every day, what would it be and why?",
    "Name an act of censorship you know about.",
    "How do you discover new music or artists?",
    "What impact do you think streaming services have had on the music industry?",
    "What's the best documentary you've watched, and why?",
    "Do you ever listen to the radio? If so, what do you listen to?",
    "Can you name a culture or group in Hollywood movies which is severely underrepresented?",
    "What role do you think journalism plays in society today?",
    "Do you trust the government? Why?",
    "How do you stay updated with current events?",
    "What’s your opinion on the influence of influencers on social media?",
    "How do you manage your screen time?",
    "Do you follow any YouTube channels regularly? If so, which ones and why?",
    "How do you think media impacts body image?",
    "How has binge-watching changed the way we watch TV shows?",
    "Do you prefer reading news articles online or in print? Why?",
    "Have you encountered any misinformation online? What did you do about it?",
    "How do you think the internet has changed the way we live?",
    "Have you ever encountered any censorship? What did you do about it?",
    "How do you feel about the portrayal of mental health in movies and TV shows?",
    "What’s a surprising fact you’ve learned from a documentary?",
    "How do you discover new TV shows or movies to watch?",
    "How do you think AI will change the future of work?",
    "What ethical considerations should be addressed with the development of AI?",
    "How do you think AI will impact your desired profession in the coming years?",
    "What role does AI play in data privacy and security?",
    "Do you think AI could ever achieve human-level intelligence? Why or why not?",
    "How can AI be used to enhance creativity in art and music?",
    "What are the biggest challenges in developing ethical AI systems?",
    "How do you see AI impacting the entertainment industry?",
    "Do you care if an artwork is made with AI? Why or why not?",
    "How do you use AI in your daily life?",
    "Do you feel that your life will be better than your parents'? Why or why not?",
    "Are we lonlier than people used to be? Why or why not?",
    "What, if any, should be the limits on the freedom of speech?"
];



const button = document.getElementById('randomTopicButton');
const displayTopic = document.getElementById('displayTopic');
let usedTopics = JSON.parse(localStorage.getItem('usedTopics')) || [];
button.addEventListener('click', function() {
    if (usedTopics.length === topics.length) {
        usedTopics = [];
    }
    const remainingTopics = topics.filter(topic => !usedTopics.includes(topic));
    const randomIndex = Math.floor(Math.random() * remainingTopics.length);
    const randomTopic = remainingTopics[randomIndex];
    usedTopics.push(randomTopic);
    localStorage.setItem('usedTopics', JSON.stringify(usedTopics));
    displayTopic.textContent = randomTopic;
});
