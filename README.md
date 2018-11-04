# RPGMV-CoreScript-Reference

## 編集の基本方針
- [`docs/jsdoc/`](tree/master/docs/jsdocs) を直接書き換える。
- 相談が必要な内容の変更はブランチを分けて行い、切りのよいところでPullRequestを提出
    - PullRequest が問題なければ、 masterブランチにマージを行う

### 編集手順
#### 通常の変更
0. GitHubアカウントを作る
1. [`docs/jsdoc/`](tree/master/docs/jsdocs) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する
- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Commit directly to the master branch`を選ぶ
6. `Commit changes`を押して決定

#### 相談が必要な内容の場合
0. GitHubアカウントを作る
1. [`docs/jsdoc/`](tree/master/docs/jsdocs) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する
- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Create a new branch for this commit and start a pull request.`を選ぶ
5. `Will be created as`の横にある入力欄はデフォルトのままでOK
- できれば、`feature/update-XXXX`のようにわかりやすいネーミングにするとより良い
6. `Propose file change`を押して決定
7. プルリクエスト登録画面が開くので、タイトルの入力欄に相談内容のタイトル、大きな入力欄に相談内容の詳細を入力
8. `Create pull request`をクリック
9. 管理者がマージするのを待つ

## JSDoc作成を行う場合
- コアスクリプトの大幅変更などにより、内容の大量変更が必要になった際に行う。

### 必要環境
#### 1. Node.js をインストール
- [一番簡単な方の方法（インストーラーから）](https://qiita.com/Masayuki-M/items/840a997a824e18f576d8)
- [後々困りにくい方の方法（Nodistから）](https://qiita.com/nt_tn/items/f3193cde496399b41e51)
- コマンドプロンプトで以下を入力してエラーがなければ成功
```
node -v
npm -v
```

#### 2. Git をインストール
https://eng-entrance.com/git-install
- コマンドプロンプトで以下を入力してエラーがなければ成功
```
git --version
```

#### 3. yarn をインストール
https://yarnpkg.com/lang/ja/docs/install/#windows-stable
- コマンドプロンプトで以下を入力してエラーがなければ成功
```
yarn -v
```

#### 4. gulp をインストール
Node.js を正常にインストールした上で、コマンドプロンプトで以下を入力すればOK
```
npm install gulp-cli -g
```
- コマンドプロンプトで以下を入力してエラーがなければ成功
```
gulp -v
```
### 手順
1. `./src`フォルダを作り、そこにjsファイルを置く
2. `yarn build`