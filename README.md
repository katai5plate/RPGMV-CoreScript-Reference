# RPGMV-CoreScript-Reference

## 編集の基本方針
- [`docs/jsdoc/`](tree/master/docs/jsdocs) を直接書き換える。
- 基本的に変更はブランチを分けて行い、切りのよいところでPullRequestを提出
    - PullRequest が問題なければ、 masterブランチにマージを行う

## JSDoc作成を行う場合
- コアスクリプトの大幅変更などにより、内容の大量変更が必要になった際に行う。
### 必要環境
1. Node.js をインストール
- [一番簡単な方の方法（インストーラーから）](https://qiita.com/Masayuki-M/items/840a997a824e18f576d8)
- [後々困りにくい方の方法（Nodistから）](https://qiita.com/nt_tn/items/f3193cde496399b41e51)

コマンドプロンプトで以下を入力してエラーがなければ成功
```
node -v
npm -v
```

2. Git をインストール
https://eng-entrance.com/git-install

コマンドプロンプトで以下を入力してエラーがなければ成功
```
git --version
```

3. yarn をインストール
https://yarnpkg.com/lang/ja/docs/install/#windows-stable

コマンドプロンプトで以下を入力してエラーがなければ成功
```
yarn -v
```

4. gulp をインストール
Node.js を正常にインストールした上で、コマンドプロンプトで以下を入力すればOK
```
npm install gulp-cli -g
```

コマンドプロンプトで以下を入力してエラーがなければ成功
```
gulp -v
```
### 手順
1. `./src`フォルダを作り、そこにjsファイルを置く
2. `yarn build`