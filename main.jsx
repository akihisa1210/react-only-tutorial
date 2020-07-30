function App() {
  const [tweets, setTweet] = React.useState([
    {
      id: 0,
      icon: '📛',
      displayName: '豆腐・オン・ファイヤー太郎',
      accountName: 'tofu_on_fire',
      content: '名札です',
    },
    {
      id: 1,
      icon: '🥺',
      displayName: 'ぴえん',
      accountName: 'pien',
      content: '記念カキコ',
    },
  ]);

  const addTweet = React.useCallback((tweet) => setTweet((prev) => [tweet, ...prev]), [setTweet])

  return (
    <div>
      <TweetInput addTweet={addTweet}/>
      <Timeline tweets={tweets}/>
    </div>
  )
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);
