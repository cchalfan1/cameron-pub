# Cameron Pub Jekyll Site

This is a Jekyll-based static website deployed on GitHub Pages. This README provides instructions for setting up, running, debugging, and deploying the site.

## Prerequisites

- **macOS** (tested on macOS; adapt for other systems)
- **Git**: For version control and GitHub integration
- **Ruby**: Version 3.2.2 (managed via `rbenv`)
- **Homebrew**: Package manager for macOS
- **Bundler**: For managing Ruby gems
- **Jekyll**: Static site generator

## Setup Instructions

### Step 1: Install Homebrew

If Homebrew is not installed, run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Step 2: Install rbenv and Ruby

To manage Ruby versions, use `rbenv` to avoid conflicts with the system Ruby (2.6).

1. Install `rbenv` and `ruby-build`:

   ```bash
   brew install rbenv ruby-build
   ```

2. Configure `rbenv` for your shell (Zsh is default on modern macOS):

   ```bash
   echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
   echo 'eval "$(rbenv init -)"' >> ~/.zshrc
   source ~/.zshrc
   ```

   For Bash, replace `~/.zshrc` with `~/.bash_profile`.

3. Install Ruby 3.2.2:

   ```bash
   rbenv install 3.2.2
   rbenv global 3.2.2
   ```

4. Verify Ruby version:
   ```bash
   ruby -v
   ```
   Expected output: `ruby 3.2.2...`.

### Step 3: Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/username/username.github.io.git
cd username.github.io
```

Replace `username` with your GitHub username. If the repository doesn't exist yet, initialize it in the `cameron-pub` directory:

```bash
cd ~/Documents/Business/Remote_Cloud_Consulting_Inc/code/cursor/chatpods-workspace/cameron-pub
git init
```

### Step 4: Install Dependencies

1. Install Bundler:

   ```bash
   gem install bundler
   ```

2. Install project gems:
   ```bash
   bundle install
   ```
   This uses the `Gemfile` to install Jekyll and other dependencies.

### Step 5: Project Structure

Key files in the project:

- `Gemfile`: Lists Ruby gem dependencies.
- `_config.yml`: Site configuration (title, URL, theme, etc.).
- `index.md`: Homepage content.
- `about.md`: About page content.
- `_posts/`: Blog posts in Markdown (optional).

### Step 6: Run Locally

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser to preview the site. Use `--livereload` for auto-reloading:

```bash
bundle exec jekyll serve --livereload
```

## Deploying to GitHub Pages

1. **Configure \_config.yml**:
   Ensure the `url` and `baseurl` are set correctly:

   ```yaml
   url: "https://username.github.io"
   baseurl: ""
   ```

   For project pages (not `username.github.io`), set `baseurl: "/repo-name"`.

2. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Update site"
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

   If the remote is already set, use `git push origin main`.

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages**.
   - Set the source to `main` branch and `/ (root)` directory.
   - Save. The site will be live at `https://username.github.io` (or `https://username.github.io/repo-name` for project pages).

## Debugging Common Issues

### Ruby Version Issues

- **Symptom**: Errors like `Could not find 'bundler' (2.6.8)` or `google-protobuf requires Ruby version >= 3.0`.
- **Fix**:
  - Verify Ruby version: `ruby -v` should show 3.2.2.
  - Check `rbenv`: `which ruby` should point to `~/.rbenv/shims/ruby`.
  - Reinitialize `rbenv`: `rbenv rehash` and `source ~/.zshrc`.
  - If system Ruby (2.6) is used, ensure `rbenv` is initialized in your shell.

### Bundler Errors

- **Symptom**: `Could not find 'bundler' (X.X.X) required by your Gemfile.lock`.
- **Fix**:
  - Install the correct Bundler version: `gem install bundler`.
  - Update `Gemfile.lock`: `rm Gemfile.lock && bundle install`.
  - Avoid `sudo` for gem commands to prevent permission issues.

### Gem Extension Errors

- **Symptom**: Errors like `Ignoring eventmachine-1.2.7 because its extensions are not built`.
- **Fix**:
  - Rebuild extensions: `gem pristine --all`.
  - Reinstall specific gems:
    ```bash
    gem install eventmachine ffi http_parser.rb nokogiri
    ```

### Jekyll Serve Errors

- **Symptom**: `bundle exec jekyll serve` fails with gem or configuration errors.
- **Fix**:
  - Check `Gemfile` for correct versions (e.g., `jekyll ~> 4.3.3`).
  - Validate `_config.yml` for YAML syntax errors (use an online YAML linter).
  - Run with verbose output: `bundle exec jekyll serve --trace`.

### GitHub Pages Build Errors

- **Symptom**: Site doesn't deploy or shows errors in GitHub Actions.
- **Fix**:
  - Check build logs in the repository’s **Actions** tab.
  - Ensure only [supported plugins](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins) are used.
  - Verify `baseurl` and `url` in `_config.yml`.
  - Test locally with GitHub Pages settings:
    ```bash
    bundle exec jekyll build --baseurl "/repo-name"
    ```

### Permission Issues

- **Symptom**: Permission denied errors when installing gems.
- **Fix**:
  - Avoid `sudo` with `rbenv`.
  - Check ownership of `~/.rbenv`: `ls -l ~`.
  - Fix permissions: `chmod -R u+rwX ~/.rbenv`.

## Customizing the Site

- **Add Content**:
  - Edit `index.md` or `about.md` for static pages.
  - Add blog posts in `_posts/` (e.g., `2025-04-25-my-post.md` with front matter).
- **Change Theme**:
  - Update `theme` in `_config.yml` or add custom CSS in `assets/css/`.
- **Add Plugins**:
  - Add to `Gemfile` and `_config.yml`, but ensure compatibility with GitHub Pages.

## Useful Commands obligación

- Build site: `bundle exec jekyll build`
- Clean build: `bundle exec jekyll clean`
- Update gems: `bundle update`
- Check Ruby environment: `gem env`

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [rbenv GitHub](https://github.com/rbenv/rbenv)
- [Bundler Documentation](https://bundler.io/)

For issues not covered, open an issue in the repository or contact the maintainer.
