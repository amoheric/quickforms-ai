param([string]$Message)

function WriteInfo { param($m) Write-Host $m -ForegroundColor Cyan }
function WriteWarn { param($m) Write-Host $m -ForegroundColor Yellow }
function WriteOk   { param($m) Write-Host $m -ForegroundColor Green }
function WriteErr  { param($m) Write-Host $m -ForegroundColor Red }

WriteInfo "Staging all changes..."
git add -A

# Detect if anything is staged
$staged = (git diff --cached --name-only)

if (-not $staged) {
  WriteWarn "No staged changes. Pulling and pushing only..."
  git pull --rebase origin main
  if ($LASTEXITCODE -ne 0) { WriteErr "Rebase failed. Resolve conflicts and re-run."; exit 1 }
  git push
  if ($LASTEXITCODE -ne 0) { WriteErr "Push failed."; exit 1 }
  WriteOk "Sync complete (no new commit)."
  exit 0
}

if ([string]::IsNullOrWhiteSpace($Message)) { $Message = "chore: update" }

WriteInfo "Commit: $Message"
git commit -m "$Message"
if ($LASTEXITCODE -ne 0) { WriteErr "Commit failed."; exit 1 }

WriteInfo "Pull (rebase) from origin/main..."
git pull --rebase origin main
if ($LASTEXITCODE -ne 0) { WriteErr "Rebase failed. Resolve conflicts: git status -> edit -> git add -> git rebase --continue"; exit 1 }

WriteInfo "Push to origin/main..."
git push
if ($LASTEXITCODE -ne 0) { WriteErr "Push failed."; exit 1 }

WriteOk "Sync complete."
