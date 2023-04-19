# Recovery Plan

## Here are step-by-step instructions on how to recover your website from a backup using GitHub 
- If you have downloaded a ZIP file of your website's backup, extract the files to a local folder on your computer.

- If you have a local copy of your website's repository that you created using Git, make sure that it is up-to-date with the latest changes from the backup. You can do this by running the command 'git pull' in your local repository's directory.

- If you have a backup branch in your repository, switch to the backup branch by running the command 'git checkout backup'. This will switch your local repository to the backup branch.

- If you have made changes to your local repository that you don't want to lose, create a new branch to make the recovery changes. You can create a new branch by running the command 'git checkout -b recovery'. This will create a new branch called "recovery" and switch your local repository to that branch.

- Copy the backup files into your website's repository directory, overwriting any existing files.

- Add the changes to your repository by running the command 'git add .'.

- Commit the changes by running the command 'git commit -m "Recovering website from backup"'.

- Push the changes to GitHub by running the command 'git push origin recovery'. This will push the changes to a new branch called "recovery" on your GitHub repository.

- If your website is hosted on GitHub Pages, go to your repository's settings and select the "recovery" branch as the source for your GitHub Pages site.

- Wait for GitHub Pages to build your website from the recovery branch. This may take a few minutes.

- Once your website is built, visit your website's URL to verify that it is working correctly.
