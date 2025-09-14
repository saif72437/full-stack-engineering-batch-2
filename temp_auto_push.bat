@echo off
rem No Windows "date"/"time" commands: they prompt and require locale formats (e.g. yy-mm-dd), which breaks bots.
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%aI"') do set GIT_AUTHOR_DATE=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%cI"') do set GIT_COMMITTER_DATE=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%s"') do set LAST_COMMIT_TEXT=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%an"') do set USER_NAME=%%A
for /f "delims=" %%A in ('cmd /c "git log -1 --format=%%ae"') do set USER_EMAIL=%%A
for /f "delims=" %%A in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%A
echo %GIT_AUTHOR_DATE%
echo %LAST_COMMIT_TEXT%
echo %USER_NAME% (%USER_EMAIL%)
echo Branch: %CURRENT_BRANCH%
git config --local user.name %USER_NAME%
git config --local user.email %USER_EMAIL%
git add .
git commit --amend -m "%LAST_COMMIT_TEXT%" --no-verify
echo Amend complete; author/committer timestamps preserved via GIT_* env.
git push -uf origin %CURRENT_BRANCH% --no-verify
@echo on