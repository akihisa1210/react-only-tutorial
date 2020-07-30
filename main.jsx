function App() {
  return (
    <div>
      <Tweet
        icon="📛"
        displayName="豆腐・オン・ファイヤー太郎"
        accountName="tofu_on_fire"
        content="名札です"
      />
      <Tweet
        icon="🥺"
        displayName="ぴえん"
        accountName="pien"
        content="記念カキコ"
      />
    </div>
  )
}

const target = document.querySelector('#app');
ReactDOM.render(<App/>, target);
