module.exports = {
  disableEmoji: false,
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'config',
    'package',
  ],
  format: "{emoji} {type}{scope}: {subject}",
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: ['setup', 'app', 'ui', 'deps'],
  types: {
    chore: {
      description: 'ビルドプロセスまたは補助ツールの変更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの変更のみ',
      emoji: '️📝',
      value: 'docs',
    },
    feat: {
      description: '新機能の追加や更新',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンスを向上させるコード変更',
      emoji: '️⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'リリースコミット',
      emoji: '🚀',
      value: 'release',
    },
    style: {
      description: 'マークアップ、ホワイトスペース、フォーマットなどの修正',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'テストの追加・修正',
      emoji: '✅',
      value: 'test',
    },
    config: {
      description: '設定ファイルの追加・修正',
      emoji: '️🔧',
      value: 'config',
    },
    package: {
      description: 'パッケージの追加・更新・削除',
      emoji: '📦',
      value: 'package',
    },
  },
};