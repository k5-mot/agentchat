


## セットアップ

### 1. uv初期化

https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-get-started-toolkit.html
https://docs.astral.sh/uv/concepts/projects/init/

```bash
uvx --from bedrock-agentcore-starter-toolkit agentcore create

----------------------------------------------------------------------------------------
🤖 AgentCore activated. Let's build your agent.
----------------------------------------------------------------------------------------

Where should we create your new agent?
./agent

How would you like to start?
A basic starter project (recommended)

What agent framework should we use?
Strands Agents SDK

Which model provider will power your agent?
Amazon Bedrock

What kind of memory should your agent have?
Long-term and short-term memory

Initialize a new git repository?
No

Agent initializing...
    • Template copied.
    • Venv created and installed.
✓ Agent initialized.

----------------------------------------------------------------------------------------
You're ready to go! Happy building 🚀
Enter your project directory using cd agent
Run agentcore dev to start the dev server
Log into AWS with aws login
Launch with agentcore deploy
----------------------------------------------------------------------------------------
```

### 2. 依存関係のインストール

```bash
cd agent
uv add aws-opentelemetry-distro bedrock-agentcore boto3 mcp pytest pytest-asyncio python-dotenv strands-agents strands-agents-tools
uv add --dev bedrock-agentcore-starter-toolkit poethepoet pyright pytest-cov pytest-mock ruff
```

### 3. aws configure

```bash
aws login --profile hobby
# Select ap-northeast-1
aws sts get-caller-identity --profile hobby
```

### 4. agentcore setup

```bash
AWS_PROFILE=hobby uv run -- agentcore dev

# 別ターミナルで実行
AWS_PROFILE=hobby uv run -- agentcore invoke --dev --port 8080 "Hello!"
```


## その他
