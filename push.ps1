param(
    [string]$m="bugfix"
)
git add -A
git commit -m $m
git push