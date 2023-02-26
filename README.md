# [リファレンスページ はこちら](https://katai5plate.github.io/RPGMV-CoreScript-Reference/)

# このプロジェクトについて

- [rpgtkoolmv/corescript](https://github.com/rpgtkoolmv/corescript) で開発されている、[RPG ツクール MV](http://www.rpgmakerweb.com/products/programs/rpg-maker-mv)のコアスクリプトのリファレンスを作る非公式プロジェクトです。
- コアスクリプトを JSDoc によりドキュメント生成したものを Markdown に変換したドキュメントを元に編集を行っていきます。

# 編集について

## コントリビューターを募集中

- このプロジェクトは始まったばかりです！ぜひ皆さんもご協力お願いします。

## 編集の基本方針

- [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) を直接書き換える。
- 相談が必要な内容の変更はブランチを分けて行い、切りのよいところで PullRequest を提出
  - PullRequest が問題なければ、 master ブランチにマージを行う

## 編集上の注意

- GitHub-Pages 上のリファレンスページに対応するようにリンクの連携を行ってください。
- GitHub-Pages での反映には数分～数十分時間がかかることがあります。
- 編集後・マージ後は必ず[コミットログ](https://github.com/katai5plate/RPGMV-CoreScript-Reference/commits/master)を確認してください。:heavy_check_mark:のときは成功、:full_moon:は検証中、:x:のときは失敗です。失敗を直さないとずっと自動更新が止まり続ける可能性があります。
- 絶対に`git reset --hard`しないでください。

## 編集する上で望ましいこと

### 基本

- ジャイアントコミット（大きな変更を一気に行う）を避ける
- 相談事や不具合報告はすべて[Issues](https://github.com/katai5plate/RPGMV-CoreScript-Reference/issues)にスレ立てする
- 編集後、必ずコミットログと反映後のリファレンスページを確認して、問題がないことを確認する

### 上級

- 大きな変更や一括変更を行う場合、ローカルに落として作業してブランチを分けてからプルリクを投げる。
- ブランチ名は`feature/YYYYMMDD-this-is-branch-name`に従う

## 編集手順

#### 通常の変更

0. GitHub アカウントを作る
1. [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する

- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Commit directly to the master branch`を選ぶ

6. `Commit changes`を押して決定

### 相談が必要な内容の場合

0. GitHub アカウントを作る
1. [`docs/jsdoc/`](https://github.com/katai5plate/RPGMV-CoreScript-Reference/tree/master/docs/jsdoc) から編集するファイルを選ぶ
2. 右上にある鉛筆マークをクリック
3. エディタが開くので、編集作業を行う
4. 編集が終わったら一番下にある`Commit changes`を入力する

- 上から１つ目の小さい入力欄は`編集内容を１行で表し`入力する
- 上から２つ目の入力欄は`編集内容を詳しく説明し`入力する（省略可）
- チェックボックスは`Create a new branch for this commit and start a pull request.`を選ぶ

5. `Will be created as`の横にある入力欄はデフォルトのままで OK

- できれば、`feature/20181104-update-XXXX`のようにわかりやすいネーミングにするとより良い

6. `Propose file change`を押して決定
7. プルリクエスト登録画面が開くので、タイトルの入力欄に相談内容のタイトル、大きな入力欄に相談内容の詳細を入力
8. `Create pull request`をクリック
9. 管理者がマージするのを待つ

### (上級者向け)ファイルを一括で編集を行う場合

0. GitHub アカウントを作り、[Git をインストール](https://git-scm.com/)
1. コマンドプロンプトで `git clone https://github.com/katai5plate/RPGMV-CoreScript-Reference.git`
2. コマンドプロンプトのカレントディレクトリにファイルがダウンロードされるので、そこで直接ファイルを編集する
3. 編集を行う内容でブランチを作成する。`RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにして、コマンドプロンプトから`git checkout -b "feature/YYYYMMDD-ブランチ名"`を入力。`YYYYMMDD`は 2018/11/04 なら 20181104 というように書く。`ブランチ名`は英数とハイフン区切りで編集内容を短く書く。例：`feature/20181104-update-XXXX-pages`
4. 編集を開始し、一段落終わったらちょくちょくコミット作業を行う

- `RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにして、コマンドプロンプトから`git add -A`を入力。すると変更がターゲティングされる。
- つぎに`git commit -m "コミット内容"`を入力。`コミット内容`にここまでの変更内容を簡単に書く。

5. 作業中のブランチでの編集を終わらせたら、コミット作業を終えて、`RPGMV-CoreScript-Reference`ディレクトリをカレントディレクトリにしたコマンドプロンプトから`git push origin ブランチ名`を入力。ブランチ名は`3.`で入力したものと同じ。例：`git push origin feature/20181104-update-XXXX-pages`
6. 成功したら[ここにアクセス](https://github.com/katai5plate/RPGMV-CoreScript-Reference/compare)
7. `base:master`になっていることを確認し、`compare:`から自分のブランチを選ぶ。
8. プルリクエスト登録画面が開くので、タイトルの入力欄に相談内容のタイトル、大きな入力欄に相談内容の詳細を入力
9. `Create pull request`をクリック
10. 管理者がマージするのを待つ
