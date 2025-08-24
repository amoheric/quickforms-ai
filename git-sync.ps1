# git-sync.ps1 — stage, commit, pull --rebase, push (ASCII-safe)

param([string]$Message)

function Get-Trimmed($s) { if ($null -eq $s) { "" } else { $s.Trim() } }

# Ensure we're in a git repo
git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  Write-Host "ERROR: Not inside a git repository." -ForegroundColor Red
  exit 1
}

Write-Host "Status:" -ForegroundColor Cyan
git status

Write-Host ""
Write-Host "Staging all changes..." -ForegroundColor Cyan
git add -A

# If nothing staged, just pull+push and exit
$staged = (git diff --cached --name-only)
if (-not $staged) {
  Write-Host "No staged changes. Pulling and pushing only..." -ForegroundColor Yellow
  git pull --rebase origin main
  git push
  Write-Host ""
  Write-Host "Sync complete (no new commit)." -ForegroundColor Green
  exit 0
}

# Commit message
$Message = Get-Trimmed $Message
if ([string]::IsNullOrWhiteSpace($Message)) {
  $Message = Read-Host "Commit message"
  $Message = Get-Trimmed $Message
}
if ([string]::IsNullOrWhiteSpace($Message)) { $Message = "chore: update" }

Write-Host "Commit: $Message" -ForegroundColor Cyan
git commit -m "$Message"

Write-Host "Pull (rebase)..." -ForegroundColor Cyan
git pull --rebase origin main

Write-Host "Push..." -ForegroundColor Cyan
git push

Write-Host ""
Write-Host "Sync complete." -ForegroundColor Green
