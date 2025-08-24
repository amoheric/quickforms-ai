# git-sync.ps1 — stage, commit, pull --rebase, push (safe)

param([string]$Message)

function Get-Trimmed($s) { if ($null -eq $s) { "" } else { $s.Trim() } }

# Ensure we're in a git repo
git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Not inside a git repository." -ForegroundColor Red
  exit 1
}

# Show status
Write-Host "🔎 Status:" -ForegroundColor Cyan
git status

# Stage everything
Write-Host "`n➕ Staging all changes..." -ForegroundColor Cyan
git add -A

# Skip commit if nothing changed
$hasChanges = (git diff --cached --name-only) -ne $null
if (-not $hasChanges) {
  Write-Host "ℹ️  No staged changes to commit. Pulling and pushing only..." -ForegroundColor Yellow
  git pull --rebase origin main
  git push
  Write-Host "`n✅ Sync complete (no new commit)." -ForegroundColor Green
  exit 0
}

# Get commit message (prompt if not provided)
$Message = Get-Trimmed $Message
if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = Read-Host "Commit message"
  $Message = Get-Trimmed $Message
}
if ([string]::IsNullOrWhiteSpace($Message)) { $Message = "chore: update" }

Write-Host "📝 Commit: $Message" -ForegroundColor Cyan
git commit -m "$Message"

Write-Host "⬇️  Pull (rebase)..." -ForegroundColor Cyan
git pull --rebase origin main

Write-Host "⬆️  Push..." -ForegroundColor Cyan
git push

Write-Host "`n✅ Sync complete." -ForegroundColor Green
