# RPGMV-CoreScript-Reference

# [リファレンスページ](https://katai5plate.github.io/RPGMV-CoreScript-Reference/)

## 編集の基本方針
- [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) を直接書き換える。
- 相談が必要な内容の変更はブランチを分けて行い、切りのよいところでPullRequestを提出
    - PullRequest が問題なければ、 masterブランチにマージを行う

## 編集上の注意
- GitHub-Pages上のリファレンスページに対応するようにリンクの連携を行ってください。
- GitHub-Pagesでの反映には数分～数十分時間がかかることがあります。
- 編集後・マージ後は必ず[コミットログ](https://github.com/katai5plate/RPGMV-CoreScript-Reference/commits/master)を確認してください。:heavy_check_mark:のときは成功、:full_moon:は検証中、:x:のときは失敗です。失敗を直さないとずっと自動更新が止まり続ける可能性があります。
- 絶対に`git reset --hard`しないでください。

### 編集手順
#### 通常の変更
0. GitHubアカウントを作る
1. [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する
- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Commit directly to the master branch`を選ぶ
6. `Commit changes`を押して決定

#### 相談が必要な内容の場合
0. GitHubアカウントを作る
1. [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する
- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Create a new branch for this commit and start a pull request.`を選ぶ
5. `Will be created as`の横にある入力欄はデフォルトのままでOK
- できれば、`feature/20181104-update-XXXX`のようにわかりやすいネーミングにするとより良い
6. `Propose file change`を押して決定
7. プルリクエスト登録画面が開くので、タイトルの入力欄に相談内容のタイトル、大きな入力欄に相談内容の詳細を入力
8. `Create pull request`をクリック
9. 管理者がマージするのを待つ

#### (上級者向け)ファイルを一括で編集を行う場合
0. GitHubアカウントを作り、[Gitをインストール](https://git-scm.com/)
1. コマンドプロンプトで `git clone https://github.com/katai5plate/RPGMV-CoreScript-Reference.git`
2. コマンドプロンプトのカレントディレクトリにファイルがダウンロードされるので、そこで直接ファイルを編集する
3. 編集を行う内容でブランチを作成する。`RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにして、コマンドプロンプトから`git checkout -b "feature/YYYYMMDD-ブランチ名"`を入力。`YYYYMMDD`は2018/11/04なら20181104というように書く。`ブランチ名`は英数とハイフン区切りで編集内容を短く書く。例：`feature/20181104-update-XXXX-pages`
4. 編集を開始し、一段落終わったらちょくちょくコミット作業を行う
- `RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにして、コマンドプロンプトから`git add -A`を入力。すると変更がターゲティングされる。
- つぎに`git commit -m "コミット内容"`を入力。`コミット内容`にここまでの変更内容を簡単に書く。
5. 作業中のブランチでの編集を終わらせたら、コミット作業を終えて、`RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにしたコマンドプロンプトから`git push origin ブランチ名`を入力。ブランチ名は`3.`で入力したものと同じ。例：`git push origin feature/20181104-update-XXXX-pages`
6. 成功したら[ここにアクセス](https://github.com/katai5plate/RPGMV-CoreScript-Reference/compare)
7. `base:master`になっていることを確認し、`compare:`から自分のブランチを選ぶ。
8. プルリクエスト登録画面が開くので、タイトルの入力欄に相談内容のタイトル、大きな入力欄に相談内容の詳細を入力
9. `Create pull request`をクリック
10. 管理者がマージするのを待つ

## JSDoc作成を行う場合
<details><summary>開く</summary><p></p>

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
1. `git clone https://github.com/katai5plate/RPGMV-CoreScript-Reference.git`
2. `cd RPGMV-CoreScript-Reference && yarn install`
3. `./src`フォルダを作り、そこにjsファイルを置く
4. `yarn build`

</p></details>
