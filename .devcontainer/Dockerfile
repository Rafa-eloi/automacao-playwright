# Use a imagem base do Playwright
FROM mcr.microsoft.com/playwright:v1.51.0-jammy


RUN hwclock --hctosys || true


RUN apt-get update && apt-get install -y software-properties-common \
    && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    && apt-get install -y docker-ce-cli \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash \
    && export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
    && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \
    && nvm install 20.11.1


RUN npm install -g npm@latest


RUN apt-get install -y libgtk-3-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libnss3 libxrandr2 libasound2 libpangocairo-1.0-0 libatk1.0-0 libatk-bridge2.0-0 libepoxy0 libgbm-dev libxshmfence1


SHELL ["/bin/bash", "-c"]


WORKDIR /workspace


COPY package.json package-lock.json ./
RUN npm ci && npx playwright install


EXPOSE 3000


CMD ["sleep", "infinity"]