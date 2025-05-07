export const Content = () => (
  <div className="matcherContent">
    <p className="text-sm md:text-lg">
      Jestでは、<strong>Matcher（マッチャー）</strong>
      を使って、様々な方法で値をテストすることができます。
      <br />
      ここでは、よく使われる基本的なMatcherを紹介します。
    </p>
    <h2 className="mt-5 text-lg md:text-2xl font-semibold">一般的な Matcher</h2>
    <p className="mt-2 text-sm md:text-lg">① 厳密に等しいかをテストする</p>
    <div className="mockup-code w-full mt-2">
      <pre>
        <code>test('two plus two is four', () =&gt; &#123;</code>
      </pre>
      <pre>
        <code> expect(2 + 2).toBe(4);</code>
      </pre>
      <pre>
        <code>&#125;);</code>
      </pre>
    </div>
    <p className="mt-2 text-sm md:text-lg">
      上記のコードでは、「2+2」が「4」であることを期待するtest()関数を作成しています。
      <br />
      JestのMatcherは、テスト失敗時に「どの比較が失敗したか」を示すエラーメッセージを出力してくれます。 <br />
      <span className="font-bold bg-neutral-content rounded">.toBe()</span>は
      <a href="https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is">
        <span className="border-b border-primary text-primary font-bold">Object.is()</span>
      </a>
      というJavaScriptのメソッドを使用して、2つの値が"厳密に同じ"であるかを比べます。
      <br />
      ただし、浮動小数点数の場合は<span className="font-bold bg-neutral-content rounded">.toBeCloseTo()</span>
      を使用する必要があります。
      <br />
      JavaScriptでは数値の丸め(誤差)が生じるため、例えば「0.2+0.1」と「0.3」は厳密に等価ではありません。
      <br />
      また、 <span className="font-bold bg-neutral-content rounded">.toBe()</span>
      でオブジェクトや配列を比較すると、中身ではなく参照が同じかどうかを確認します。
      <br />
      そのため、下記のような比較を行うと別のオブジェクトであるためエラーが返ってきます。
    </p>
    <div className="mockup-code w-full mt-2">
      <pre>const obj = &#123;one: 1&#125;</pre>
      <pre>expect(obj).toBe(&#123;one: 1&#125;); //別のオブジェクトなので失敗 </pre>
    </div>
    <p className="text-sm md:text-lg">
      このような場合は、中身の比較をする <span className="font-bold bg-neutral-content rounded">.toEqual()</span>
      を使用しましょう。
    </p>
    <div className="mockup-code w-full mt-2">
      <pre>const obj = &#123;one: 1&#125;</pre>
      <pre>expect(obj).toEqual(&#123;one: 1&#125;); </pre>
    </div>
    <span className="font-bold bg-neutral-content rounded">.toEqual()</span>
    は、オブジェクトや配列の全てのフィールドを再起的に比較し、ネストされた要素まで値の等しさを検証します。
  </div>
);
