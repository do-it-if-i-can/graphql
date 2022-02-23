# やれたらやるチーム qraphql repository

## GraphQLスキーマからの型生成手順
以下の手順でGraphQLのスキーマ(ex. `schema.graphql`)から型を生成する
（※基本的にはServerリポジトリ側でSchemaに変更があった場合に実行する）

graphqlリポジトリ内で`yarn codegen`を実行する（gql.tsxファイル内の型定義が更新される）
```bash
yarn codegen
```

変更をコミットしてリモートにプッシュする
```bash
git push origin HEAD
```

## codegenで生成した型定義をclient側で使用する手順
graphqlリポジトリ内の変更をclient側に反映させるため、clientリポジトリ側で以下の`submodule`コマンドを実行する
```bash
# submoduleの更新（参照先mainブランチのHEADを参照する）
git submodule update --remote
```